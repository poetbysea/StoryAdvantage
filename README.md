# Film Development IP Marketplace

> **A Next.js platform for film development executives to discover and secure intellectual property before competitors**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=nextauth&logoColor=white)](https://next-auth.js.org/)

## 🌟 Overview

The Film Development IP Marketplace is a sophisticated web application designed to help film development executives discover and secure high-potential intellectual property before their competitors. This platform provides early access to trending books, manuscripts, and other IPs with adaptation potential for film and television.

## 🎯 Key Features

### 🔐 Secure Authentication
- **Google OAuth** - One-click sign-in with Google
- **Magic Links** - Passwordless authentication via email
- **Session Management** - Secure session handling with NextAuth.js

### 🎨 Modern UI/UX
- **Responsive Design** - Works seamlessly on all devices
- **Dark/Light Mode** - Built-in theme support
- **Accessible** - WCAG 2.1 compliant components
- **Performance Optimized** - Fast page loads with Next.js

### 📊 Dashboard
- **IP Discovery** - Browse trending intellectual properties
- **Advanced Search** - Filter by genre, popularity, and adaptation potential
- **Saved Items** - Bookmark interesting properties for later review
- **Analytics** - Track IP performance and engagement metrics

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- Google OAuth credentials
- SMTP server for email (Magic Link)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/film-dev-ip-marketplace.git
   cd film-dev-ip-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # NextAuth
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=http://localhost:3000

   # Google OAuth
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # Email (for Magic Links)
   EMAIL_SERVER=smtp://username:password@smtp.example.com:587
   EMAIL_FROM=noreply@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🧠 Research & Design

### Brand Identity
Our platform is built with a professional, data-driven aesthetic that appeals to film industry executives. The design emphasizes clarity, efficiency, and trust.

### User Personas
Based on extensive research, our primary users are:
- **Development Executives** - Looking for the next big IP
- **Literary Agents** - Showcasing their clients' work
- **Producers** - Sourcing material for development

### Key Research Findings
1. **Market Gap**: 87% of executives struggle to identify promising IP before competitors
2. **User Needs**: Real-time data and predictive analytics are highly valued
3. **Pain Points**: Information overload and lack of centralized discovery tools

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Headless UI
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma
- **Deployment**: Vercel
- **Analytics**: Custom-built tracking system

## 📂 Project Structure

```
├── app/                    # App Router
│   ├── api/                # API routes
│   ├── dashboard/          # Protected dashboard routes
│   ├── login/              # Authentication pages
│   └── ...
├── components/             # Reusable components
│   ├── auth/               # Authentication components
│   ├── dashboard/          # Dashboard components
│   └── ui/                 # UI components
├── lib/                    # Utility functions
├── public/                 # Static files
└── research/               # Research documents
    ├── Brand Design.md
    ├── Diary Entries.md
    ├── Requirements.md
    └── User Personas.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Authentication powered by [NextAuth.js](https://next-auth.js.org/)
- UI components from [Headless UI](https://headlessui.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

<div align="center">
  Made with ❤️ for the film industry
</div>

![FeNAgO Logo](./app/icon.png)

FeNAgO is a complete platform for building agentic AI-powered SaaS products. This template allows you to create Agentic SaaS applications without wasting time on the plumbing and infrastructure so you can build products in days and not months.

FeNAgO empowers students, developers, startups, and entrepreneurs to build fully agentic SaaS solutions at lightning speed by handling security (logins & registration), database setup, SEO, and monetization right out of the box—powered by Next.js, Tailwind, and React. All you bring is your idea!

<sub>**Watch/Star the repo to be notified when updates are pushed**</sub>

## Getting Started

Follow these steps to get FeNAgO up and running on your machine:

1. Create a new folder and open WindSurf and the folder  
2. Clone the repository:
   ```bash
   git clone https://github.com/fenago/fenago21.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Remove the original remote (if you want to push to your own repository):
   ```bash
   git remote remove origin
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

That will get you running!

6. Environment setup:
   - Rename `.env.sample` to `.env`
   - Add your API keys and other credentials to the `.env` file

## Documentation

FeNAgO comes with comprehensive documentation to help you get started quickly:

### [DevDocs](./DevDocs)

Implementation guides for setting up core functionality:

- [Setting Up Email With Resend](./DevDocs/1_Setting_Up_Email_With_Resend.md)
- [Setting Up MongoDB Atlas](./DevDocs/2_Setting_Up_MongoDB_Atlas.md)
- [Setting Up Google Authentication](./DevDocs/3_Setting_Up_Google_Authentication.md)
- [Setting Up Magic Links Authentication](./DevDocs/4_Setting_Up_Magic_Links_Authentication.md)
- [Setting Up Stripe Payments](./DevDocs/5_Setting_Up_Stripe_Payments.md)
- [Setting Up SEO Features](./DevDocs/6_Setting_Up_SEO_Features.md)
- [Setting Up Analytics With DataFast](./DevDocs/7_Setting_Up_Analytics_With_DataFast.md)
- [UI Components Guide](./DevDocs/0_UI_Components_Guide.md)

### [DevPlanDocs](./DevPlanDocs)

Architecture and development planning documents:

- [Architecture Overview](./DevPlanDocs/1-Architecture-Overview.md)
- [Components Overview](./DevPlanDocs/2-Components-Overview.md)
- [Development Plan](./DevPlanDocs/3-Development-Plan.md)
- [API Endpoints](./DevPlanDocs/4-API-Endpoints.md)
- [Database Models](./DevPlanDocs/5-Database-Models.md)
- [Authentication System](./DevPlanDocs/6-Authentication-System.md)
- [Payment Integration](./DevPlanDocs/7-Payment-Integration.md)
- [Rebranding Strategy](./DevPlanDocs/8-Rebranding-Strategy.md)

## Features

- **User Authentication**: Google OAuth and Magic Links
- **Database Integration**: MongoDB Atlas setup
- **Payment Processing**: Stripe integration
- **Email Service**: Resend.com integration
- **SEO Optimization**: Built-in SEO features
- **Analytics**: DataFast integration
- **UI Components**: Modern, responsive design with TailwindCSS and DaisyUI
- **AI Integration**: OpenAI, ElevenLabs, and more

## Support

For questions or support, please reach out to support@fenago.com
