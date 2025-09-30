import { useState, useEffect } from "react";
import { Upload, FileText, Trash2, CheckCircle, AlertCircle, Eye, X, LogOut, Calendar, Plus, Edit3, Save, BarChart3, Users, Files, Menu, Moon, Sun } from "lucide-react";

const UploadPage = ({ onLogout }) => {
  const [pdfFiles, setPdfFiles] = useState({});
  const [events, setEvents] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    type: 'event',
    image: null
  });
  const [editingEvent, setEditingEvent] = useState(null);

  // Campus mapping - EXACTLY matching ApplicationForm.jsx keys
  const expectedFiles = [
    { name: "Bungoma.pdf", campus: "bungoma", displayName: "Bungoma Campus", color: "from-blue-400 to-blue-600" },
    { name: "Eldoret.pdf", campus: "eldoret", displayName: "Eldoret Campus", color: "from-red-400 to-red-600" },
    { name: "airads kisumu.pdf", campus: "kisumu", displayName: "Kisumu City Campus", color: "from-blue-400 to-blue-600" },
    { name: "LODWAR Campus.pdf", campus: "lodwar", displayName: "Lodwar Campus", color: "from-red-400 to-red-600" },
    { name: "Nakuru.pdf", campus: "nakuru", displayName: "Nakuru Campus", color: "from-blue-400 to-blue-600" },
    { name: "Airads Kericho.pdf", campus: "kericho", displayName: "Kericho Campus", color: "from-red-400 to-red-600" }
  ];

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('airads-dark-mode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('airads-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Load existing files and events from localStorage with error handling
  useEffect(() => {
    try {
      const savedFiles = localStorage.getItem('airadsPdfFiles');
      const savedEvents = localStorage.getItem('airads-events');
      
      if (savedFiles) {
        const parsedFiles = JSON.parse(savedFiles);
        // Convert back to internal format with validation
        const filesObject = {};
        if (Array.isArray(parsedFiles)) {
          parsedFiles.forEach(file => {
            const expectedFile = expectedFiles.find(ef => ef.campus === file.campus);
            if (expectedFile && file.data && file.name) {
              filesObject[expectedFile.name] = {
                name: file.name,
                data: file.data,
                size: file.size || 0,
                uploadDate: file.uploadDate || new Date().toISOString(),
                type: 'application/pdf',
                campus: file.campus
              };
            }
          });
          setPdfFiles(filesObject);
        }
      }

      if (savedEvents) {
        const parsedEvents = JSON.parse(savedEvents);
        if (Array.isArray(parsedEvents)) {
          setEvents(parsedEvents);
        }
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
      // Clear corrupted data
      localStorage.removeItem('airadsPdfFiles');
      localStorage.removeItem('airads-events');
    }
  }, []);

  // Save files to localStorage in ApplicationForm format whenever pdfFiles changes
  useEffect(() => {
    try {
      const formattedFiles = Object.entries(pdfFiles).map(([fileName, file]) => {
        const campusFile = expectedFiles.find(ef => ef.name === fileName);
        return {
          id: `${campusFile?.campus || 'unknown'}-${Date.now()}`,
          name: fileName,
          data: file.data,
          size: file.size,
          uploadDate: file.uploadDate,
          campus: campusFile ? campusFile.campus : 'unknown',
          formType: 'application'
        };
      });
      
      // Always save to localStorage, even if empty
      localStorage.setItem('airadsPdfFiles', JSON.stringify(formattedFiles));
      
      // Trigger storage event for real-time sync
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'airadsPdfFiles',
        newValue: JSON.stringify(formattedFiles),
        storageArea: localStorage
      }));
    } catch (error) {
      console.error('Error saving files:', error);
    }
  }, [pdfFiles]);

  // Save events to localStorage whenever events changes
  useEffect(() => {
    try {
      localStorage.setItem('airads-events', JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events:', error);
    }
  }, [events]);

  // Admin authentication
  const handleAdminLogin = () => {
    if (adminPassword === 'Tvet@upload') {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
    } else {
      alert('Incorrect password. Access denied.');
    }
  };

  // Logout function
  const handleLogout = () => {
    setIsAdmin(false);
    setShowPasswordPrompt(true);
    setAdminPassword('');
    setActiveTab('dashboard');
    if (onLogout) {
      onLogout();
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Enhanced file upload with better progress handling
  const handleFileUpload = async (files, campusKey = null) => {
    if (!campusKey && !selectedCampus) {
      alert('Please select a campus before uploading files.');
      return;
    }
    
    const targetCampus = campusKey || selectedCampus;
    const fileArray = Array.from(files);
    
    for (const file of fileArray) {
      if (file.type === 'application/pdf') {
        try {
          // Show immediate upload start
          setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
          
          const reader = new FileReader();
          
          reader.onprogress = (e) => {
            if (e.lengthComputable) {
              const progress = Math.round((e.loaded / e.total) * 90); // Reserve 10% for processing
              setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
            }
          };
          
          reader.onload = (e) => {
            try {
              const base64Data = e.target.result;
              
              // Find the expected file name for this campus
              const expectedFile = expectedFiles.find(ef => ef.campus === targetCampus);
              const fileName = expectedFile ? expectedFile.name : file.name;
              
              // Complete the upload
              setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
              
              setPdfFiles(prev => ({
                ...prev,
                [fileName]: {
                  name: fileName,
                  data: base64Data,
                  size: file.size,
                  uploadDate: new Date().toISOString(),
                  type: file.type,
                  campus: targetCampus
                }
              }));

              // Clear progress after a short delay
              setTimeout(() => {
                setUploadProgress(prev => {
                  const newProgress = { ...prev };
                  delete newProgress[file.name];
                  return newProgress;
                });
              }, 1500);
              
            } catch (error) {
              console.error('Error processing file:', error);
              alert(`Error processing ${file.name}. Please try again.`);
              setUploadProgress(prev => {
                const newProgress = { ...prev };
                delete newProgress[file.name];
                return newProgress;
              });
            }
          };
          
          reader.onerror = () => {
            console.error('Error reading file:', file.name);
            alert(`Error reading ${file.name}. Please try again.`);
            setUploadProgress(prev => {
              const newProgress = { ...prev };
              delete newProgress[file.name];
              return newProgress;
            });
          };
          
          // Start reading the file
          reader.readAsDataURL(file);
          
        } catch (error) {
          console.error('Error uploading file:', error);
          alert(`Error uploading ${file.name}. Please try again.`);
        }
      } else {
        alert(`File ${file.name} is not a PDF. Only PDF files are allowed.`);
      }
    }
  };

  // Handle image upload for events
  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  // Handle drag and drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (activeTab === 'files') {
        handleFileUpload(e.dataTransfer.files);
      }
    }
  };

  // Delete file
  const handleDeleteFile = (fileName) => {
    if (window.confirm(`Are you sure you want to delete ${fileName}?`)) {
      setPdfFiles(prev => {
        const newFiles = { ...prev };
        delete newFiles[fileName];
        return newFiles;
      });
    }
  };

  // Event management functions
  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.description || !newEvent.date) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      let imageData = null;
      if (newEvent.image) {
        imageData = await handleImageUpload(newEvent.image);
      }

      const event = {
        id: Date.now(),
        ...newEvent,
        image: imageData,
        createdAt: new Date().toISOString()
      };

      setEvents(prev => [event, ...prev]);
      setNewEvent({ title: '', description: '', date: '', type: 'event', image: null });
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Error adding event. Please try again.');
    }
  };

  const handleEditEvent = (eventId) => {
    const event = events.find(e => e.id === eventId);
    if (event) {
      setEditingEvent({ ...event });
    }
  };

  const handleUpdateEvent = async () => {
    if (!editingEvent.title || !editingEvent.description || !editingEvent.date) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      let imageData = editingEvent.image;
      if (editingEvent.newImage) {
        imageData = await handleImageUpload(editingEvent.newImage);
      }

      setEvents(prev => 
        prev.map(event => 
          event.id === editingEvent.id 
            ? { ...editingEvent, image: imageData, updatedAt: new Date().toISOString() }
            : event
        )
      );
      setEditingEvent(null);
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Error updating event. Please try again.');
    }
  };

  const handleDeleteEvent = (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents(prev => prev.filter(event => event.id !== eventId));
    }
  };

  // Preview file
  const handlePreviewFile = (fileName) => {
    const file = pdfFiles[fileName];
    if (file) {
      setPreviewFile(file);
    }
  };

  // Clear all files
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all uploaded files? This action cannot be undone.')) {
      setPdfFiles({});
    }
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get upload status for each expected file
  const getFileStatus = (expectedFileName) => {
    return pdfFiles[expectedFileName] ? 'uploaded' : 'missing';
  };

  // Theme classes
  const themeClasses = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-slate-50 to-red-50',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    sidebarBg: darkMode ? 'bg-gray-800' : 'bg-white',
    text: darkMode ? 'text-gray-100' : 'text-gray-800',
    textSecondary: darkMode ? 'text-gray-300' : 'text-gray-600',
    textMuted: darkMode ? 'text-gray-400' : 'text-gray-500',
    border: darkMode ? 'border-gray-600' : 'border-gray-300',
    input: darkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-800',
    hover: darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  };

  // Sidebar navigation items
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'text-blue-600' },
    { id: 'files', label: 'PDF Management', icon: FileText, color: 'text-green-600' },
    { id: 'events', label: 'Events Management', icon: Calendar, color: 'text-red-500' }
  ];

  if (showPasswordPrompt) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-400 via-slate-100 to-red-400'} flex items-center justify-center p-4`}>
        <div className={`${themeClasses.cardBg} rounded-xl shadow-2xl p-8 w-full max-w-md`}>
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-white w-fit">
              <Upload className="h-8 w-8" />
            </div>
            <h2 className={`text-2xl font-bold ${themeClasses.text}`}>Admin Access Required</h2>
            <p className={`${themeClasses.textSecondary} mt-2`}>Enter admin password to manage content</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Admin Password</label>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                placeholder="Enter password"
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
            </div>
            <button
              onClick={handleAdminLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium"
            >
              Access Admin Panel
            </button>
            <button
              onClick={toggleDarkMode}
              className={`w-full ${themeClasses.cardBg} ${themeClasses.border} border ${themeClasses.text} py-2 rounded-lg ${themeClasses.hover} transition-all font-medium flex items-center justify-center`}
            >
              {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} ${themeClasses.sidebarBg} shadow-xl transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className={`p-6 border-b ${themeClasses.border}`}>
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${!sidebarOpen && 'justify-center'}`}>
              <div className="p-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg text-white">
                <Upload className="h-6 w-6" />
              </div>
              {sidebarOpen && (
                <div className="ml-3">
                  <h1 className={`text-lg font-bold ${themeClasses.text}`}>AIRADS</h1>
                  <p className={`text-xs ${themeClasses.textMuted}`}>Admin Panel</p>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors`}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-gray-600" />}
              </button>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`p-2 rounded-lg ${themeClasses.hover} transition-colors`}
              >
                <Menu className={`h-4 w-4 ${themeClasses.textSecondary}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-red-500 text-white shadow-lg'
                      : `${themeClasses.textSecondary} ${themeClasses.hover}`
                  }`}
                >
                  <IconComponent className={`h-5 w-5 ${sidebarOpen ? 'mr-3' : 'mx-auto'} ${
                    activeTab === item.id ? 'text-white' : item.color
                  }`} />
                  {sidebarOpen && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className={`p-4 border-t ${themeClasses.border}`}>
          <button
            onClick={handleLogout}
            className={`w-full p-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center ${
              !sidebarOpen && 'justify-center'
            }`}
          >
            <LogOut className={`h-4 w-4 ${sidebarOpen ? 'mr-2' : ''}`} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6 mb-8`}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-2xl font-bold ${themeClasses.text}`}>
                  {sidebarItems.find(item => item.id === activeTab)?.label}
                </h1>
                <p className={themeClasses.textSecondary}>Content Management System</p>
              </div>
              <div className="text-right">
                <p className={`text-sm ${themeClasses.textMuted}`}>Welcome Admin</p>
                <p className="text-lg font-semibold text-green-600">
                  {Object.keys(pdfFiles).length}/6 Files • {events.length} Events
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{Object.keys(pdfFiles).length}</span>
                  </div>
                  <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Uploaded Forms</h3>
                  <p className={`text-sm ${themeClasses.textMuted}`}>Out of 6 campuses</p>
                </div>

                <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-red-500">{events.length}</span>
                  </div>
                  <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Total Events</h3>
                  <p className={`text-sm ${themeClasses.textMuted}`}>Published events</p>
                </div>

                <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                      <Users className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-green-600">6</span>
                  </div>
                  <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Total Campuses</h3>
                  <p className={`text-sm ${themeClasses.textMuted}`}>Active locations</p>
                </div>

                <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
                      <Files className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-purple-600">
                      {Math.round((Object.keys(pdfFiles).length / 6) * 100)}%
                    </span>
                  </div>
                  <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Completion</h3>
                  <p className={`text-sm ${themeClasses.textMuted}`}>Forms uploaded</p>
                </div>
              </div>

              {/* Campus Status Overview */}
              <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6`}>
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-6`}>Campus Forms Status</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {expectedFiles.map((file, index) => {
                    const status = getFileStatus(file.name);
                    return (
                      <div key={index} className={`flex items-center justify-between p-4 border ${themeClasses.border} rounded-lg`}>
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            status === 'uploaded' ? 'bg-green-500' : 'bg-red-500'
                          }`}></div>
                          <span className={`font-medium ${themeClasses.text}`}>{file.displayName}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          status === 'uploaded' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {status === 'uploaded' ? 'Ready' : 'Missing'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* PDF Management Tab */}
          {activeTab === 'files' && (
            <>
              {/* Upload Section */}
              <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6 mb-8`}>
                <h2 className={`text-xl font-bold ${themeClasses.text} mb-4`}>Upload Application Form PDFs</h2>
                
                {/* Campus Selector */}
                <div className="mb-6">
                  <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Select Campus *</label>
                  <select
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                    className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                  >
                    <option value="">Choose a campus...</option>
                    {expectedFiles.map((file) => (
                      <option key={file.campus} value={file.campus}>
                        {file.displayName}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                    dragActive 
                      ? `border-blue-500 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}` 
                      : selectedCampus 
                        ? `border-green-500 hover:border-green-600 ${darkMode ? 'hover:bg-green-900/20' : 'hover:bg-green-50'}`
                        : `${themeClasses.border} hover:border-blue-500 ${themeClasses.hover}`
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className={`h-12 w-12 mx-auto mb-4 ${
                    selectedCampus ? 'text-green-500' : themeClasses.textMuted
                  }`} />
                  <h3 className={`text-lg font-semibold ${themeClasses.text} mb-2`}>
                    {dragActive 
                      ? 'Drop files here' 
                      : selectedCampus 
                        ? `Upload for ${expectedFiles.find(f => f.campus === selectedCampus)?.displayName}`
                        : 'Select Campus First'
                    }
                  </h3>
                  <p className={`${themeClasses.textSecondary} mb-4`}>
                    {selectedCampus 
                      ? 'Upload PDF application form for the selected campus'
                      : 'Please select a campus before uploading files'
                    }
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className="hidden"
                    id="file-upload"
                    disabled={!selectedCampus}
                  />
                  <button
                    onClick={() => selectedCampus && document.getElementById('file-upload').click()}
                    disabled={!selectedCampus}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      selectedCampus 
                        ? 'bg-gradient-to-r from-blue-500 to-red-500 text-white hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {selectedCampus ? 'Select PDF Files' : 'Select Campus First'}
                  </button>
                </div>

                {/* Upload Progress */}
                {Object.keys(uploadProgress).length > 0 && (
                  <div className="mt-4 space-y-2">
                    {Object.entries(uploadProgress).map(([fileName, progress]) => (
                      <div key={fileName} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-3`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium ${themeClasses.text}`}>{fileName}</span>
                          <span className={`text-sm ${themeClasses.textMuted}`}>{progress}%</span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full h-2`}>
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-red-500 h-2 rounded-full transition-all"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Campus Files Status */}
              <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6 mb-8`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-xl font-bold ${themeClasses.text}`}>Campus Application Forms Status</h2>
                  {Object.keys(pdfFiles).length > 0 && (
                    <button
                      onClick={handleClearAll}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center text-sm"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear All
                    </button>
                  )}
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {expectedFiles.map((file, index) => {
                    const status = getFileStatus(file.name);
                    const uploadedFile = pdfFiles[file.name];
                    
                    return (
                      <div key={index} className={`border ${themeClasses.border} rounded-xl p-4 hover:shadow-md transition-shadow`}>
                        <div className={`bg-gradient-to-r ${file.color} text-white p-3 rounded-lg mb-3`}>
                          <div className="flex items-center justify-between">
                            <FileText className="h-5 w-5" />
                            {status === 'uploaded' ? (
                              <CheckCircle className="h-5 w-5 text-green-300" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-yellow-300" />
                            )}
                          </div>
                          <h3 className="font-semibold text-sm mt-2">{file.displayName}</h3>
                        </div>
                        
                        <div className="space-y-2">
                          <p className={`text-sm font-medium ${themeClasses.text}`}>{file.name}</p>
                          {uploadedFile ? (
                            <div className="space-y-2">
                              <div className={`flex items-center justify-between text-xs ${themeClasses.textMuted}`}>
                                <span>{formatFileSize(uploadedFile.size)}</span>
                                <span>{new Date(uploadedFile.uploadDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex space-x-2">
                                <button
                                  onClick={() => handlePreviewFile(file.name)}
                                  className="flex-1 bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors flex items-center justify-center"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  Preview
                                </button>
                                <button
                                  onClick={() => handleDeleteFile(file.name)}
                                  className="flex-1 bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600 transition-colors flex items-center justify-center"
                                >
                                  <Trash2 className="h-3 w-3 mr-1" />
                                  Delete
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-2">
                              <span className="text-xs text-red-600 font-medium">Not Uploaded</span>
                              <button
                                onClick={() => {
                                  setSelectedCampus(file.campus);
                                  document.getElementById('file-upload').click();
                                }}
                                className="block w-full mt-2 bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors"
                              >
                                Upload Now
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Events Management Tab */}
          {activeTab === 'events' && (
            <>
              {/* Add New Event */}
              <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6 mb-8`}>
                <h2 className={`text-xl font-bold ${themeClasses.text} mb-4`}>Add New Event</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Title *</label>
                      <input
                        type="text"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                        className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                        placeholder="Event title"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Date *</label>
                      <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                        className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Type</label>
                      <select
                        value={newEvent.type}
                        onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                        className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                      >
                        <option value="event">Event</option>
                        <option value="news">News</option>
                        <option value="holiday">Holiday</option>
                        <option value="announcement">Announcement</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Description *</label>
                      <textarea
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                        rows={4}
                        className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none`}
                        placeholder="Event description"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setNewEvent({...newEvent, image: e.target.files[0]})}
                        className={`w-full p-3 ${themeClasses.input} ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleAddEvent}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Event
                </button>
              </div>

              {/* Events List */}
              <div className={`${themeClasses.cardBg} rounded-xl shadow-lg p-6`}>
                <h2 className={`text-xl font-bold ${themeClasses.text} mb-4`}>Manage Events ({events.length})</h2>
                {events.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No events posted yet. Add your first event above.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {events.map((event) => (
                      <div key={event.id} className={`border ${themeClasses.border} rounded-lg p-4 hover:shadow-md transition-shadow`}>
                        {editingEvent && editingEvent.id === event.id ? (
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <input
                                type="text"
                                value={editingEvent.title}
                                onChange={(e) => setEditingEvent({...editingEvent, title: e.target.value})}
                                className={`w-full p-2 ${themeClasses.input} ${themeClasses.border} rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                              />
                              <input
                                type="date"
                                value={editingEvent.date}
                                onChange={(e) => setEditingEvent({...editingEvent, date: e.target.value})}
                                className={`w-full p-2 ${themeClasses.input} ${themeClasses.border} rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                              />
                              <select
                                value={editingEvent.type}
                                onChange={(e) => setEditingEvent({...editingEvent, type: e.target.value})}
                                className={`w-full p-2 ${themeClasses.input} ${themeClasses.border} rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                              >
                                <option value="event">Event</option>
                                <option value="news">News</option>
                                <option value="holiday">Holiday</option>
                                <option value="announcement">Announcement</option>
                              </select>
                            </div>
                            <div className="space-y-3">
                              <textarea
                                value={editingEvent.description}
                                onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})}
                                rows={3}
                                className={`w-full p-2 ${themeClasses.input} ${themeClasses.border} rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none`}
                              />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setEditingEvent({...editingEvent, newImage: e.target.files[0]})}
                                className={`w-full p-2 ${themeClasses.input} ${themeClasses.border} rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                              />
                              <div className="flex space-x-2">
                                <button
                                  onClick={handleUpdateEvent}
                                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors flex items-center text-sm"
                                >
                                  <Save className="h-3 w-3 mr-1" />
                                  Save
                                </button>
                                <button
                                  onClick={() => setEditingEvent(null)}
                                  className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-colors text-sm"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start justify-between">
                            <div className="flex space-x-4 flex-1">
                              {event.image && (
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="w-20 h-20 object-cover rounded-lg"
                                />
                              )}
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className={`font-semibold text-lg ${themeClasses.text}`}>{event.title}</h3>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    event.type === 'event' ? 'bg-blue-100 text-blue-800' :
                                    event.type === 'news' ? 'bg-green-100 text-green-800' :
                                    event.type === 'holiday' ? 'bg-red-100 text-red-800' :
                                    'bg-purple-100 text-purple-800'
                                  }`}>
                                    {event.type}
                                  </span>
                                </div>
                                <p className={`${themeClasses.textSecondary} mb-2`}>{event.description}</p>
                                <div className={`flex items-center space-x-4 text-sm ${themeClasses.textMuted}`}>
                                  <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                                  <span>🕒 {new Date(event.createdAt).toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleEditEvent(event.id)}
                                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors flex items-center text-sm"
                              >
                                <Edit3 className="h-3 w-3 mr-1" />
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteEvent(event.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors flex items-center text-sm"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* PDF Preview Modal */}
          {previewFile && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
              <div className={`${themeClasses.cardBg} rounded-lg max-w-4xl max-h-[90vh] w-full overflow-hidden`}>
                <div className={`flex items-center justify-between p-4 border-b ${themeClasses.border}`}>
                  <h3 className={`text-lg font-semibold ${themeClasses.text}`}>{previewFile.name}</h3>
                  <button
                    onClick={() => setPreviewFile(null)}
                    className={`${themeClasses.textMuted} hover:${themeClasses.text} transition-colors`}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-4 max-h-[calc(90vh-80px)] overflow-auto">
                  <iframe
                    src={previewFile.data}
                    className={`w-full h-96 border ${themeClasses.border} rounded`}
                    title={`Preview of ${previewFile.name}`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { 
//   Upload as UploadIcon, 
//   FileText, 
//   Lock, 
//   CheckCircle, 
//   AlertCircle,
//   Eye,
//   EyeOff,
//   Trash2,
//   Plus,
//   Download
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { useToast } from "@/components/ui/use-toast";
// import TopNavbar from "../components/TopNavbar";
// import MainNavbar from "../components/MainNavbar";

// const Upload = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [isUploading, setIsUploading] = useState(false);
//   const [dragActive, setDragActive] = useState(false);
//   const [selectedCampus, setSelectedCampus] = useState("");
//   const [selectedFormType, setSelectedFormType] = useState("");
//   const navigate = useNavigate();
//   const { toast } = useToast();

//   const ADMIN_PASSWORD = "airads2025";

//   const campuses = [
//     { value: "bungoma", label: "Bungoma Campus" },
//     { value: "eldoret", label: "Eldoret Campus" },
//     { value: "kisumu", label: "Kisumu City Campus" },
//     { value: "lodwar", label: "Lodwar Campus" },
//     { value: "nakuru", label: "Nakuru Campus" },
//     { value: "kericho", label: "Kericho Campus" }
//   ];

//   const formTypes = [
//     { value: "certificate", label: "Certificate Courses Application" },
//     { value: "diploma", label: "Diploma Courses Application" },
//     { value: "short", label: "Short Courses Application" }
//   ];

//   // Load uploaded files from localStorage on component mount
//   useEffect(() => {
//     const storedFiles = localStorage.getItem('airadsPdfFiles');
//     if (storedFiles) {
//       try {
//         setUploadedFiles(JSON.parse(storedFiles));
//       } catch (error) {
//         console.error('Error loading stored files:', error);
//         setUploadedFiles([]);
//       }
//     }
//   }, []);

//   // Save files to localStorage whenever uploadedFiles changes
//   useEffect(() => {
//     try {
//       localStorage.setItem('airadsPdfFiles', JSON.stringify(uploadedFiles));
//     } catch (error) {
//       console.error('Error saving files to localStorage:', error);
//     }
//   }, [uploadedFiles]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       setIsAuthenticated(true);
//       toast({
//         title: "Access Granted",
//         description: "Welcome to the admin upload panel",
//         variant: "default",
//       });
//     } else {
//       toast({
//         title: "Access Denied",
//         description: "Incorrect password. Please try again.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleFileUpload = async (files) => {
//     if (!selectedCampus || !selectedFormType) {
//       toast({
//         title: "Selection Required",
//         description: "Please select both campus and form type before uploading",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsUploading(true);
//     const newFiles = [];

//     for (let file of files) {
//       if (file.type === 'application/pdf') {
//         try {
//           // Convert file to base64 for permanent storage
//           const fileReader = new FileReader();
//           const filePromise = new Promise((resolve) => {
//             fileReader.onload = (e) => {
//               const fileData = {
//                 id: Date.now() + Math.random(),
//                 name: file.name,
//                 size: file.size,
//                 uploadDate: new Date().toISOString(),
//                 campus: selectedCampus,
//                 formType: selectedFormType,
//                 data: e.target.result, // Base64 data
//                 originalName: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
//               };
//               resolve(fileData);
//             };
//           });
          
//           fileReader.readAsDataURL(file);
//           const fileData = await filePromise;
//           newFiles.push(fileData);
//         } catch (error) {
//           console.error('Error processing file:', file.name, error);
//         }
//       } else {
//         toast({
//           title: "Invalid File Type",
//           description: `${file.name} is not a PDF file`,
//           variant: "destructive",
//         });
//       }
//     }

//     if (newFiles.length > 0) {
//       setUploadedFiles(prev => [...prev, ...newFiles]);
//       toast({
//         title: "Upload Successful",
//         description: `${newFiles.length} PDF file(s) uploaded successfully`,
//         variant: "default",
//       });
//       // Reset selections after successful upload
//       setSelectedCampus("");
//       setSelectedFormType("");
//     }

//     setIsUploading(false);
//   };

//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
    
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       handleFileUpload(Array.from(e.dataTransfer.files));
//     }
//   };

//   const handleFileInput = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       handleFileUpload(Array.from(e.target.files));
//     }
//   };

//   const deleteFile = (fileId) => {
//     setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
//     toast({
//       title: "File Deleted",
//       description: "PDF file has been removed successfully",
//       variant: "default",
//     });
//   };

//   const downloadFile = (file) => {
//     try {
//       const link = document.createElement('a');
//       link.href = file.data;
//       link.download = file.name;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       toast({
//         title: "Download Error",
//         description: "Failed to download the file",
//         variant: "destructive",
//       });
//     }
//   };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   const getCampusLabel = (value) => {
//     if (!value) return 'Unknown';
//     const campus = campuses.find(c => c.value === value);
//     return campus ? campus.label : value.toString().toUpperCase();
//   };

//   const getFormTypeLabel = (value) => {
//     if (!value) return 'Unknown';
//     const formType = formTypes.find(f => f.value === value);
//     return formType ? formType.label : value.toString().toUpperCase();
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
//         <TopNavbar />
//         <MainNavbar />
        
//         <div className="pt-32 px-4 flex items-center justify-center min-h-screen">
//           <Card className="w-full max-w-md">
//             <CardHeader className="text-center">
//               <div className="mx-auto w-16 h-16 bg-gradient-to-r from-airads-blue to-airads-red rounded-full flex items-center justify-center mb-4">
//                 <Lock className="h-8 w-8 text-white" />
//               </div>
//               <CardTitle className="text-2xl font-bold">Admin Access Required</CardTitle>
//               <p className="text-muted-foreground">Enter the admin password to access the upload panel</p>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleLogin} className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="password">Password</Label>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter admin password"
//                       className="pr-10"
//                       required
//                     />
//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="sm"
//                       className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                     </Button>
//                   </div>
//                 </div>
//                 <Button type="submit" className="w-full bg-gradient-to-r from-airads-blue to-airads-blue-dark">
//                   <Lock className="mr-2 h-4 w-4" />
//                   Access Upload Panel
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
//       <TopNavbar />
//       <MainNavbar />
      
//       {/* Header */}
//       <section className="pt-32 pb-12 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-8">
//             <Badge className="mb-4 text-sm px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white border-0">
//               <CheckCircle className="mr-2 h-4 w-4" />
//               ADMIN AUTHENTICATED
//             </Badge>
//             <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-airads-blue to-airads-red bg-clip-text text-transparent">
//               PDF Upload Management
//             </h1>
//             <p className="text-lg text-muted-foreground">
//               Upload PDF files for campus applications and forms
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Upload Section */}
//       <section className="pb-12 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <Card className="mb-8">
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <UploadIcon className="mr-2 h-5 w-5" />
//                 Upload PDF Files
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               {/* Selection Controls */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="campus-select">Select Campus</Label>
//                   <Select value={selectedCampus} onValueChange={setSelectedCampus}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Choose a campus" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {campuses.map((campus) => (
//                         <SelectItem key={campus.value} value={campus.value}>
//                           {campus.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="form-type-select">Select Form Type</Label>
//                   <Select value={selectedFormType} onValueChange={setSelectedFormType}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Choose form type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {formTypes.map((formType) => (
//                         <SelectItem key={formType.value} value={formType.value}>
//                           {formType.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Upload Area */}
//               <div
//                 className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
//                   dragActive 
//                     ? 'border-airads-blue bg-airads-blue/5' 
//                     : selectedCampus && selectedFormType
//                     ? 'border-gray-300 hover:border-airads-blue'
//                     : 'border-gray-200 bg-gray-50 cursor-not-allowed'
//                 }`}
//                 onDragEnter={handleDrag}
//                 onDragLeave={handleDrag}
//                 onDragOver={handleDrag}
//                 onDrop={selectedCampus && selectedFormType ? handleDrop : undefined}
//               >
//                 <UploadIcon className={`mx-auto h-12 w-12 mb-4 ${
//                   selectedCampus && selectedFormType ? 'text-gray-400' : 'text-gray-300'
//                 }`} />
//                 <p className="text-lg font-medium mb-2">
//                   {selectedCampus && selectedFormType 
//                     ? "Drag and drop PDF files here, or click to select"
//                     : "Please select campus and form type first"
//                   }
//                 </p>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Only PDF files are accepted. Files will be categorized automatically.
//                 </p>
//                 <input
//                   type="file"
//                   multiple
//                   accept=".pdf"
//                   onChange={handleFileInput}
//                   className="hidden"
//                   id="file-upload"
//                   disabled={!selectedCampus || !selectedFormType}
//                 />
//                 <label htmlFor="file-upload">
//                   <Button 
//                     asChild 
//                     className="bg-gradient-to-r from-airads-blue to-airads-blue-dark"
//                     disabled={!selectedCampus || !selectedFormType}
//                   >
//                     <span className={selectedCampus && selectedFormType ? "cursor-pointer" : "cursor-not-allowed"}>
//                       <Plus className="mr-2 h-4 w-4" />
//                       Select PDF Files
//                     </span>
//                   </Button>
//                 </label>
//               </div>
              
//               {isUploading && (
//                 <div className="mt-4 p-4 bg-blue-50 rounded-lg">
//                   <div className="flex items-center">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-airads-blue mr-2"></div>
//                     <span className="text-sm text-airads-blue">Uploading files...</span>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Files List */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center justify-between">
//                 <span className="flex items-center">
//                   <FileText className="mr-2 h-5 w-5" />
//                   Uploaded Files ({uploadedFiles.length})
//                 </span>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => navigate('/application-form')}
//                 >
//                   View Application Page
//                 </Button>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {uploadedFiles.length === 0 ? (
//                 <div className="text-center py-8 text-muted-foreground">
//                   <FileText className="mx-auto h-12 w-12 mb-4 opacity-50" />
//                   <p>No PDF files uploaded yet</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {uploadedFiles.map((file) => (
//                     <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                       <div className="flex items-center space-x-4">
//                         <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
//                           <FileText className="h-5 w-5 text-red-600" />
//                         </div>
//                         <div>
//                           <p className="font-medium">{file.name}</p>
//                           <div className="flex items-center space-x-4 text-sm text-muted-foreground">
//                             <span>{formatFileSize(file.size)}</span>
//                             <span>•</span>
//                             <span>{new Date(file.uploadDate).toLocaleDateString()}</span>
//                             <span>•</span>
//                             <Badge variant="outline" className="text-xs">
//                               {getCampusLabel(file.campus || 'unknown')}
//                             </Badge>
//                             <span>•</span>
//                             <Badge variant="outline" className="text-xs">
//                               {getFormTypeLabel(file.formType || 'unknown')}
//                             </Badge>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => downloadFile(file)}
//                           className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
//                         >
//                           <Download className="h-4 w-4" />
//                         </Button>
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => deleteFile(file.id)}
//                           className="text-red-600 hover:text-red-700 hover:bg-red-50"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Instructions */}
//           <Card className="mt-8">
//             <CardHeader>
//               <CardTitle>Upload Instructions</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
//                   <div>
//                     <p className="font-medium">Select Campus and Form Type</p>
//                     <p className="text-sm text-muted-foreground">
//                       Choose the appropriate campus and form type before uploading files
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
//                   <div>
//                     <p className="font-medium">PDF Files Only</p>
//                     <p className="text-sm text-muted-foreground">
//                       Only PDF files are accepted for upload
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
//                   <div>
//                     <p className="font-medium">Permanent Storage</p>
//                     <p className="text-sm text-muted-foreground">
//                       Files are stored permanently and will appear on the application form page
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
//                   <div>
//                     <p className="font-medium">Admin Only</p>
//                     <p className="text-sm text-muted-foreground">
//                       Only authorized administrators can upload and manage files
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Upload;