module.exports = function(frameRouter) {
  frameRouter.setupFrames(
    {
      app1: {
        url: 'http://localhost:8080/client-app-1/#/',
        assignedRoute: '/app1',
        filteredTopics: {
          'keydown.topic': (event) => { return !event.payload.altKey }
        }
      },
      app2: {
        url: 'http://localhost:8080/client-app-2/#/',
        assignedRoute: '/app2',
        filteredTopics: {
          'keydown.topic': (event) => { return !event.payload.altKey }
        }
      }
    },
    {
      locale: 'en-US',
      hostRootUrl: window.location.origin,
      custom: getCustomClientData()
    }
  );

  return {
    // These are the topics that the host app should display payloads for when
    // the client publishes on them.
    publishTopics: ['publish.topic', 'keydown.topic']
  };
};

function getCustomClientData() {
  return { test: 'This is only a test' };
}
