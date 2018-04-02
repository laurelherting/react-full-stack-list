const path = require('path');
const Express = require('express');

const app = new Express();
const PORT = process.env.PORT || 3000;
app.use(Express.static(path.resolve(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, (error) => {
  // eslint-disable-line no-console
  // eslint-disable-line comma-dangle
  if (error) {
    console.error(error);
  } else {
    console.info(
      '🌎Listening on PORT %s.',
      PORT,
    );
  }
  // eslint-enable-line no-console
  // eslint-enable-line comma-dangle
});
