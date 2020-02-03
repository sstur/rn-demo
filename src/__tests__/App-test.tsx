import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import { createRenderer } from 'react-test-renderer/shallow';

it('should render correctly', () => {
  let renderer = createRenderer();
  renderer.render(<App />);
});
