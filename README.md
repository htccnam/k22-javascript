# K22-Javascript Exercises

A collection of JavaScript exercises implemented as React components for learning and practice.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Exercises](#available-exercises)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project is a set of practice exercises (bài) for learning JavaScript and React. Each exercise focuses on a specific concept, ranging from basic programming constructs to more complex algorithms.

## Features
- Interactive React components for each exercise
- Immediate feedback on user input
- Covers topics such as:
  - Score calculation and ranking
  - Day of week conversion
  - Taxi fare calculation
  - Prime number checking
  - String formatting
  - Email masking
  - And more...

## Project Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── App.jsx
│   ├── sesson1/
│   │   └── Sesson1.jsx
│   ├── sesson2/
│   │   └── Sesson2.jsx
│   ├── ... (other sessions)
├── utils/
│   ├── sesson1/
│   │   ├── ScoreCaculatorAndRanking.js
│   │   ├── PrintDayOfWeek.js
│   │   └── TaxiFareCalculator.js
│   ├── sesson2/
│   │   ├── PrimeNumberChecker.js
│   │   ├── FormatFullName.js
│   │   └── MaskEmail.js
│   └── ... (other utils)
├── index.css
└── main.jsx
public/
├── favicon.svg
└── icons.svg
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/htccnam/k22-javascript.git
   ```
2. Navigate to the project directory:
   ```bash
   cd k22-javascript
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To start the development server:
```bash
npm run dev
```
This will launch the application at `http://localhost:5173` (or another port if 5173 is in use).

To build for production:
```bash
npm run build
```
To preview the production build:
```bash
npm run preview
```

## Available Exercises
The project currently includes the following sessions:

### Session 1 (Sesson1)
- Bài 1: Hệ thống tính điểm và xếp loại học sinh
- Bài 2: Chuyển đổi số sang ngày trong tuần
- Bài 3: Tính tiền cước Taxi

### Session 2 (Sesson2)
- Bài 1: Kiểm tra số nguyên tố
- Bài 2: Chuẩn hóa tên người dùng
- Bài 3: Che thông tin email

*(More sessions can be found in the src/components directory)*

## Building for Production
To create an optimized production build:
```bash
npm run build
```
The built files will be in the `dist/` directory.

## Deployment
This project is configured for deployment to GitHub Pages. To deploy:
```bash
npm run deploy
```
This will run the build script and then publish the `dist/` directory to the `gh-pages` branch.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is open source and available under the [MIT License](LICENSE).

---

*Built with Vite and React*