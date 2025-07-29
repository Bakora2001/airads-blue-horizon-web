


import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, Tag, Image as ImageIcon, Users, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Load events from localStorage
  useEffect(() => {
    const savedEvents = localStorage.getItem('airads-events');
    if (savedEvents) {
      try {
        const parsedEvents = JSON.parse(savedEvents);
        setEvents(parsedEvents);
        setFilteredEvents(parsedEvents);
      } catch (error) {
        console.error('Error loading events:', error);
        setEvents([]);
        setFilteredEvents([]);
      }
    }
  }, []);

  // Filter events based on type and search term
  useEffect(() => {
    let filtered = events;

    if (selectedType !== 'all') {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  }, [events, selectedType, searchTerm]);

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'event':
        return 'bg-blue-900 text-white';
      case 'news':
        return 'bg-green-700 text-white';
      case 'holiday':
        return 'bg-red-900 text-white';
      case 'announcement':
        return 'bg-purple-700 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'event':
        return '🎉';
      case 'news':
        return '📰';
      case 'holiday':
        return '🏖️';
      case 'announcement':
        return '📢';
      default:
        return '📅';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  const upcomingEvents = filteredEvents.filter(event => isUpcoming(event.date));
  const pastEvents = filteredEvents.filter(event => !isUpcoming(event.date));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <TopNavbar />
      <MainNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-red-900/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-gradient-to-r from-blue-900 to-red-900 text-white border-0">
              Latest Updates
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-red-900 bg-clip-text text-transparent">
              Events & News
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
              Stay updated with the latest events, news, holidays, and announcements from AIRADS College
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{events.length} total posts</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{upcomingEvents.length} upcoming events</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white/70 backdrop-blur-sm sticky top-0 z-40 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="event">Events</SelectItem>
                  <SelectItem value="news">News</SelectItem>
                  <SelectItem value="holiday">Holidays</SelectItem>
                  <SelectItem value="announcement">Announcements</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredEvents.length} of {events.length} posts
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="text-center p-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
              <div className="text-2xl font-bold">{events.filter(e => e.type === 'event').length}</div>
              <div className="text-sm opacity-90">Events</div>
            </Card>
            <Card className="text-center p-4 bg-gradient-to-br from-green-700 to-green-600 text-white border-0">
              <div className="text-2xl font-bold">{events.filter(e => e.type === 'news').length}</div>
              <div className="text-sm opacity-90">News</div>
            </Card>
            <Card className="text-center p-4 bg-gradient-to-br from-red-900 to-red-700 text-white border-0">
              <div className="text-2xl font-bold">{events.filter(e => e.type === 'holiday').length}</div>
              <div className="text-sm opacity-90">Holidays</div>
            </Card>
            <Card className="text-center p-4 bg-gradient-to-br from-purple-700 to-purple-600 text-white border-0">
              <div className="text-2xl font-bold">{events.filter(e => e.type === 'announcement').length}</div>
              <div className="text-sm opacity-90">Announcements</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Upcoming Events
              </h2>
              <p className="text-xl text-muted-foreground">Don't miss these important dates</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-red-900 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.slice(0, 6).map((event) => (
                <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden bg-gradient-to-br from-white to-primary/5" onClick={() => setSelectedEvent(event)}>
                  {event.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getEventTypeColor(event.type)} border-0`}>
                          {getEventTypeIcon(event.type)} {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs font-medium">
                        <div className="text-blue-900">{new Date(event.date).getDate()}</div>
                        <div className="text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    {!event.image && (
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`${getEventTypeColor(event.type)} border-0`}>
                          {getEventTypeIcon(event.type)} {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                        <div className="text-right text-sm">
                          <div className="font-bold text-blue-900">{new Date(event.date).getDate()}</div>
                          <div className="text-gray-600">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                        </div>
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-900 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group-hover:bg-blue-900 group-hover:text-white transition-all w-full"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events / Past Events */}
      <section className="py-16 px-4 bg-gradient-to-r from-white to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {upcomingEvents.length > 0 ? 'Recent Events & News' : 'All Events & News'}
            </h2>
            <p className="text-xl text-muted-foreground">
              {upcomingEvents.length > 0 ? 'Catch up on what you missed' : 'Stay informed with our latest updates'}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-red-900 mx-auto mt-4"></div>
          </div>

          {filteredEvents.length === 0 ? (
            <Card className="text-center py-16 border-0 bg-gradient-to-br from-white to-primary/5">
              <CardContent>
                <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Events Found</h3>
                <p className="text-muted-foreground">
                  {selectedType !== 'all' || searchTerm 
                    ? 'Try adjusting your filters or search terms'
                    : 'No events have been posted yet. Check back soon for updates!'
                  }
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {(upcomingEvents.length > 0 ? pastEvents : filteredEvents).map((event) => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 overflow-hidden" onClick={() => setSelectedEvent(event)}>
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      {event.image && (
                        <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className={`${event.image ? 'lg:w-2/3' : 'w-full'} p-6 flex flex-col justify-between`}>
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`${getEventTypeColor(event.type)} border-0`}>
                              {getEventTypeIcon(event.type)} {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </Badge>
                            <div className="text-sm text-muted-foreground">
                              Posted {new Date(event.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-900 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {event.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{formatDate(event.date)}</span>
                            {isUpcoming(event.date) && (
                              <Badge variant="outline" className="ml-3 text-green-600 border-green-600">
                                Upcoming
                              </Badge>
                            )}
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="group-hover:bg-blue-900 group-hover:text-white transition-all"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {selectedEvent.image && (
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${getEventTypeColor(selectedEvent.type)} border-0`}>
                    {getEventTypeIcon(selectedEvent.type)} {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800"
                >
                  ✕
                </Button>
              </div>
            )}
            <div className="p-6 max-h-[calc(90vh-320px)] overflow-auto">
              {!selectedEvent.image && (
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${getEventTypeColor(selectedEvent.type)} border-0`}>
                    {getEventTypeIcon(selectedEvent.type)} {selectedEvent.type.charAt(0).toUpperCase() + selectedEvent.type.slice(1)}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                {selectedEvent.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(selectedEvent.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Posted {new Date(selectedEvent.createdAt).toLocaleDateString()}</span>
                </div>
                {isUpcoming(selectedEvent.date) && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Upcoming
                  </Badge>
                )}
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            AIRADS College
          </h3>
          <p className="text-gray-400 mb-6">Stay connected with the latest news and events</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Badge className="bg-blue-900/20 text-blue-400 border-blue-600">events</Badge>
            <Badge className="bg-red-900/20 text-red-400 border-red-600">
              {events.length} posts
            </Badge>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 AIRADS College. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Events;