Object.defineProperty(exports, "__esModule", {
  value: true
});
var titleStyle = {
  fontSize: '5rem',
  lineHeight: '1.5'
};

var subtitleStyle = {
  fontSize: '2rem',
  lineHeight: '1.5'
};

var headerStyle = {
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover'
};

var containerStyle = {
  width: '100%',
  position: 'relative',
  zIndex: 2
};

var videoStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 1,
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  transform: 'translate(-50%, -50%)'
};

exports.titleStyle = titleStyle;
exports.subtitleStyle = subtitleStyle;
exports.headerStyle = headerStyle;
exports.containerStyle = containerStyle;
exports.videoStyle = videoStyle;