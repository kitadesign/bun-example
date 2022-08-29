export default {
  port: 3000,
  fetch(request) {
    return new Response('Bun hello world!\n');
  },
}

