export function trackMetaPixel(eventName, params) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }

  if (params) {
    window.fbq('track', eventName, params);
    return;
  }

  window.fbq('track', eventName);
}

export function trackMetaPixelCustom(eventName, params) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }

  if (params) {
    window.fbq('trackCustom', eventName, params);
    return;
  }

  window.fbq('trackCustom', eventName);
}
