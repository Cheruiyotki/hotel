import React, { useEffect } from 'react';
import { SITE } from '../config/site';

const ensureMeta = (name, attr = 'name') => {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
};

export const Seo = ({
  title,
  description,
  image,
  url,
  type = 'website',
  jsonLd = null,
}) => {
  useEffect(() => {
    const siteTitle = SITE.name;
    if (title) document.title = title;
    else document.title = siteTitle;

    // Description
    const desc = ensureMeta('description');
    desc.setAttribute('content', description || '');

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url ? url : SITE.url + window.location.pathname);

    // Open Graph
    const og = (prop) => {
      const selector = `meta[property='og:${prop}']`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', `og:${prop}`);
        document.head.appendChild(el);
      }
      return el;
    };
    og('title').setAttribute('content', title || SITE.name);
    og('description').setAttribute('content', description || '');
    og('url').setAttribute('content', url || SITE.url + window.location.pathname);
    og('type').setAttribute('content', type);
    if (image) og('image').setAttribute('content', image);

    // Twitter
    const ensureTwitter = (name) => ensureMeta(name, 'name');
    ensureTwitter('twitter:card').setAttribute('content', image ? 'summary_large_image' : 'summary');
    ensureTwitter('twitter:title').setAttribute('content', title || SITE.name);
    ensureTwitter('twitter:description').setAttribute('content', description || '');
    if (image) ensureTwitter('twitter:image').setAttribute('content', image);

    // JSON-LD
    if (jsonLd) {
      let el = document.getElementById('seo-json-ld');
      if (!el) {
        el = document.createElement('script');
        el.setAttribute('type', 'application/ld+json');
        el.setAttribute('id', 'seo-json-ld');
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(jsonLd, null, 2);
    }

    return () => {
      // Optionally keep tags — do not remove to allow client-side navigation to reuse.
    };
  }, [title, description, image, url, type, jsonLd]);

  return null;
};

export default Seo;
