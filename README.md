# 🦄 BoredUnicornBot

A vibrant, animated web application that suggests fun activities when you're feeling bored. Watch as each suggestion magically types itself out on screen!

## 🎮 Demo

[Live Demo](https://shymochkaa.github.io/bored-unicorn-bot/)

## ✨ Features
- Fetches random activity suggestions from the Bored API
- Animated typewriter effect for displaying suggestions
- Dynamic gradient background animation
- Interactive button with hover and click effects
- Fully responsive design
- Accessible interface with ARIA labels

## 🛠️ Technologies Used
- HTML5
- CSS3
  - Flexbox for layout
  - CSS Animations (@keyframes)
  - Custom button styling and interactions
  - Responsive design
- JavaScript
  - Fetch API for data retrieval
  - Custom typewriter animation effect
  - Event handling
- Google Fonts
  - Lilita One (for headings)
  - Nunito (for body text)
- External APIs
  - Scrimba Bored API (activity suggestions)

## 📥 Installation

1. Clone this repository
```bash
git clone https://github.com/shymochkaa/bored-unicorn-bot
```

2. Navigate to the project directory
```bash
cd bored-unicorn-bot
```

3. Open `index.html` in your preferred browser or use a live server

## 🚀 Usage

1. Load the application in your web browser
2. Click the "Try me ✨" button to generate a new activity
3. Watch as the suggestion types itself out on screen
4. Click again for more ideas!

## 💻 Code Structure

### HTML (`index.html`)
- Basic structure with necessary meta tags
- Google Fonts integration
- Main container with title, idea display, and button
- Semantic HTML with accessibility considerations

### CSS (`index.css`)
- Responsive design with Flexbox
- Animated gradient background
- Custom button styling and animations
- Typography settings with Google Fonts
- Interactive hover and click states

### JavaScript (`index.js`)
- API integration with fetch requests
- Custom typewriter effect implementation
- Event handling for button clicks
- Dynamic text content management

## 🎨 Features in Detail

### Typewriter Effect
- Custom implementation with adjustable speed
- Cancellable animation for smooth transitions
- Character-by-character text rendering

### Gradient Animation
- Smooth color transitions between:
  - #ee7752
  - #e73c7e
  - #23a6d5
  - #23d5ab
- Infinite animation loop
- 15-second cycle duration

## 🌐 API Integration

The application uses the Scrimba Bored API:
```javascript
fetch('https://apis.scrimba.com/bored/api/activity')
```

## 👏 Acknowledgments

This project was created as part of Scrimba's Frontend Developer Career Path. 

Special thanks to:
* The Scrimba team for the project requirements and learning experience
* The Bored API for providing activity suggestions


## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
