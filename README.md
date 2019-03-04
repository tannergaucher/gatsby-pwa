## Minimal Gatsby PWA

- Offline functionality
- Add to homescreen
- Push notifications

## Plugins

gatsby-plugin-offline
gatsby-sw

## What is a service worker?

- API for caching resources offline,
- Fully featured, offline functioning app using web technology
- Intercept network requests -> add to browser cache, served cache resources if browser is detected as offline
- Enables push notifications through Push / Notifications API

--- resources
[https://alligator.io/js/service-workers/]

## Events SW listens for

- fetch
- install
- activate
- sync
- push
