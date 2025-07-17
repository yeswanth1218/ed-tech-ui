# EduTrack AI - Educational Management System

A comprehensive AI-powered educational management platform designed for institutions to streamline student evaluation, performance tracking, and administrative tasks.

## 🚀 Features

### Core Functionality
- **AI-Powered Evaluation System**: Automated question paper processing and answer sheet evaluation
- **Student Performance Tracking**: Comprehensive analytics and progress monitoring
- **Administrative Dashboard**: Complete organizational management tools
- **Financial Management**: Budget tracking and expense management
- **Department Management**: Multi-department support with detailed analytics

### AI Evaluation Workflow
1. **Exam Creation**: Set up exams with detailed parameters
2. **Question Paper Upload**: AI-powered question extraction from images
3. **Answer Key Management**: Define correct answers and marking schemes
4. **Rubric Configuration**: Customize evaluation rules and criteria
5. **Student Answer Processing**: Automated evaluation with detailed feedback

### User Roles
- **Students**: View performance, track progress, access results
- **Teachers**: Create exams, manage evaluations, monitor student progress
- **Administrators**: Full system access, user management, financial oversight

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **Routing**: React Router DOM 6.8.1
- **Charts**: Recharts 2.5.0
- **Styling**: Tailwind CSS
- **Icons**: Material Icons
- **Fonts**: Lexend, Noto Sans

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edutrack-ai-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── AIChatbot.js          # AI assistant component
│   ├── AdminPanel.js         # Administrative controls
│   ├── Dashboard.js          # Main dashboard
│   ├── Evaluation.js         # Evaluation management
│   ├── Financials.js         # Financial management
│   ├── LandingPage.js        # Landing page
│   ├── Login.js              # Authentication
│   ├── StudentProfile.js     # Student information
│   ├── UploadPage.js         # AI evaluation system
│   └── ...
├── contexts/
│   └── ThemeContext.js       # Theme management
├── App.js                    # Main application component
├── index.js                  # Application entry point
└── index.css                 # Global styles
```

## 🎯 Key Components

### AI Evaluation System
- **ExamCreation**: Form-based exam setup
- **QuestionPaperUpload**: Image processing for question extraction
- **AnswerKeyManagement**: Answer definition and marking schemes
- **RubricConfiguration**: Evaluation rules and criteria
- **StudentAnswerUpload**: Automated answer processing

### Dashboard Features
- Real-time analytics and metrics
- Performance tracking charts
- Administrative controls
- Financial overview
- Department management

### User Management
- Role-based access control
- Profile management
- Permission system
- Activity tracking

## 🎨 Design System

- **Color Palette**: Professional blue and gray tones
- **Typography**: Lexend and Noto Sans for optimal readability
- **Components**: Consistent design patterns across all modules
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant interface elements

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## 🌟 Features in Detail

### AI-Powered Evaluation
- Optical Character Recognition (OCR) for question extraction
- Intelligent answer matching algorithms
- Customizable rubrics and marking schemes
- Automated feedback generation
- Performance analytics and insights

### Student Management
- Comprehensive student profiles
- Performance tracking and analytics
- Progress monitoring tools
- Communication features
- Assignment and exam management

### Administrative Tools
- User role management
- Financial tracking and budgeting
- Department oversight
- System configuration
- Reporting and analytics

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Create a `.env` file in the root directory:
```
REACT_APP_API_URL=your_api_url
REACT_APP_ENVIRONMENT=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please contact the development team or create an issue in the repository.

## 🔄 Version History

- **v0.1.0** - Initial release with core functionality
- AI evaluation system implementation
- Dashboard and analytics features
- User management system
- Financial management tools

---

**EduTrack AI** - Transforming education through intelligent automation and comprehensive management tools.