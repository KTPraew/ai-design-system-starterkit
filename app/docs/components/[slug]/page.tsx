import { notFound, redirect } from 'next/navigation'

// Map of component slugs to their actual routes
const componentRoutes: Record<string, string> = {
  'accordion': '/accordion',
  'alert': '/alert',
  'aspect-ratio': '/aspect-ratio',
  'avatar': '/avatar',
  'badge': '/badge',
  'breadcrumb': '/breadcrumb',
  'button': '/button',
  'button-group': '/button-group',
  'calendar': '/calendar',
  'card': '/card',
  'carousel': '/carousel',
  'chart': '/chart',
  'checkbox': '/checkbox',
  'collapsible': '/collapsible',
  'combobox': '/combobox',
  'command': '/command',
  'context-menu': '/context-menu',
  'data-table': '/data-table',
  'date-picker': '/date-picker',
  'dialog': '/dialog',
  'drawer': '/drawer',
  'dropdown-menu': '/dropdown-menu',
  'empty': '/empty',
  'field': '/field',
  'hover-card': '/hover-card',
  'input': '/input',
  'input-group': '/input-group',
  'input-otp': '/input-otp',
  'item': '/item',
  'kbd': '/kbd',
  'label': '/label',
  'menubar': '/menubar',
  'native-select': '/native-select',
  'navigation-menu': '/navigation-menu',
  'pagination': '/pagination',
  'popover': '/popover',
  'progress': '/progress',
  'radio-group': '/radio-group',
  'scroll-area': '/scroll-area',
  'select': '/select',
  'separator': '/separator',
  'sheet': '/sheet',
  'sidebar': '/sidebar',
  'skeleton': '/skeleton',
  'slider': '/slider',
  'sonner': '/sonner',
  'spinner': '/spinner',
  'switch': '/switch',
  'table': '/table',
  'tabs': '/tabs',
  'textarea': '/textarea',
  'toggle': '/toggle',
  'toggle-group': '/toggle-group',
  'tooltip': '/tooltip',
}

export default async function ComponentPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const route = componentRoutes[slug]

  if (!route) {
    notFound()
  }

  redirect(route)
}

export async function generateStaticParams() {
  return Object.keys(componentRoutes).map((slug) => ({
    slug,
  }))
}
