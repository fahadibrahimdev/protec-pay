import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Tired of worrying about Fraudulent Online Retailers?',
    text: 'ProtecPay is an escrow service app. It holds your money safely, till you receive the package you are paying for and can inspect to see that it’s in perfect condition.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Discover Features ',
    features: [
        {
            title: 'Secure ',
            description: 'ProtecPay keeps your funds secure until you have received your purchased goods or services, allowing you to shop stress free.',
            icon: 'security'
        },
        {
            title: 'Connect',
            description: 'Connect all your payment apps to ProtecPay allowing you to easily send money across multiple payment platforms',
            icon: 'payment-methods'
        },
        {
            title: 'Increase Creditability',
            description: 'Small businesses can use ProtecPay to show online customers that when they buy from you they are going to get exactly what they paid for.',
            icon: 'money-growth'
        },
        {
            title: 'Consumers',
            description: 'We take the trust factor out of buying products and services from people you met online or social media.  ProtecPay will hold your sent payment  until the purchase or service is completed, then release your funds to the recipient. ',
            icon: 'consuming'
        },
    ],
    process: [
        {
            image: '/images/illustrations/deal.webp',
            text: 'Find something you wish to purchase and let the seller know you want to pay using ProtecPay.'
        },
        {
            image: '/images/illustrations/payments.webp',
            text: 'Send your payment to ProtecPay using your preferred payment app and we will secure your funds.'
        },
        {
            image: '/images/illustrations/scrolling.webp',
            text: 'ProtecPay will notify the seller that you have paid for your purchase.'
        },
        {
            image: '/images/illustrations/delivery.webp',
            text: 'Receive your goods or service and we release your funds to the seller, if you don’t receive the items purchased we return you your hard earned money. Simple as that.'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'The unique thing about ProtecPay is that it is compatible with all online financial payment methods.',
        'App users do not have to worry about losing their hard-earned money when the products they ordered online do not arrive, are damaged beyond use, or are not what they ordered.',
        'You can use this service by showing proof of funds to the seller, after inspecting the received product you can click the release funds button to complete payment.',
    ],
}

export const benefitsContent = {
    heading: 'ProtecPay Makes Checkout Convenient',
    text: 'ProtecPay is not only secure but super easy to use as well. ',
    benefits: [
        {
            title: 'Compatible ',
            description: 'ProtecPay is compatible with all online money app platforms. This means you do not have to create a new account on a specific platform just to make a payment.',
            icon: 'compatiblity'
        },
        {
            title: 'Easy to Use ',
            description: 'You do not have to be a fintech expert to use the app. The interface is designed to be navigable and intuitive for both conditioned and less fintech savvy users.',
            icon: 'snapping'
        },
        {
            title: 'Hassle-Free ',
            description: 'Checking out from eCommerce sites can be tedious. With ProtecPay you don’t have to fill endless digital fields. ',
            icon: 'transation'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is ProtecPay Compatible with Android or iOS?',
            answer: 'ProtecPay is available on both Android and iOS devices.',

        },
        {
            question: 'What is the payment model like for using ProtecPay?',
            answer: 'ProtecPay is completely free to download but there will be processing fees that may vary per transaction.',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'Please get in touch with one of our representatives using the feedback and support information provided below.',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Don’t let fraudulent retailers keep you from shopping online!',
    text: 'Sign up to be the first to download the ProtecPay app'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'twitter',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        },
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    accent: `Why ${siteName}?`,
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
