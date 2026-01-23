/**
 * Application Constants
 */

// Brand Configuration
export const BRAND = {
  name: 'My App',
  description: 'A modern web application built with Next.js and shadcn/ui',
  version: '1.0.0',
  author: 'Your Name',
  email: 'your.email@example.com',
  website: 'https://example.com',
  repository: 'https://github.com/yourusername/project',
} as const

// API Configuration
export const API = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
} as const

// UI Configuration
export const UI = {
  // Toast notifications
  toast: {
    duration: 3000,
    position: 'bottom-right',
  },
  // Dialog defaults
  dialog: {
    closeOnEscape: true,
    closeOnClickOutside: true,
  },
  // Pagination
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
  },
} as const

// Feature Flags
export const FEATURES = {
  darkMode: true,
  animations: true,
  notifications: true,
  seo: true,
} as const

// Environment
export const ENVIRONMENT = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const

// Route Configuration
export const ROUTES = {
  home: '/',
  components: '/components',
  docs: '/docs',
  settings: '/settings',
  profile: '/profile',
} as const

// Error Messages
export const ERROR_MESSAGES = {
  notFound: 'Page not found',
  unauthorized: 'Unauthorized access',
  forbidden: 'Access forbidden',
  serverError: 'Something went wrong. Please try again later.',
  networkError: 'Network error. Please check your connection.',
  validationError: 'Please check the form and try again.',
} as const

// Success Messages
export const SUCCESS_MESSAGES = {
  saved: 'Changes saved successfully',
  created: 'Item created successfully',
  updated: 'Item updated successfully',
  deleted: 'Item deleted successfully',
  copied: 'Copied to clipboard',
} as const

// Regex Patterns
export const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\+\(\)]+$/,
  url: /^(https?:\/\/)?([\da-z\.\-]+)\.([a-z\.]{2,6})([\/\w \.\-]*)*\/?$/,
  slug: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
} as const

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const

// Sizes
export const SIZES = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const

// Variants
export const VARIANTS = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  destructive: 'destructive',
  outline: 'outline',
  ghost: 'ghost',
} as const
