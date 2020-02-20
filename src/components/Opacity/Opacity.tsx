import React, { FC, useState } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { SOpacity } from './SOpacity';

const Opacity: FC = () => {
  const [animation] = useState({
    opacity: new Animated.Value(1)
  });

  const handleOpacity = () => {
    Animated.timing(animation.opacity, {
      toValue: 0,
      duration: 600
    }).start(() => {
      Animated.timing(animation.opacity, {
        toValue: 1,
        duration: 500
      }).start();
    });
  };

  const animatedStyles = {
    ...animation,
    transform: [
      {
        scale: animation.opacity.interpolate({
          inputRange: [0, 1],
          outputRange: [2, 1] // 0 : 150, 0.5 : 75, 1 : 0
        })
      }
    ]
  };

  return (
    <TouchableWithoutFeedback onPress={handleOpacity}>
      <SOpacity as={Animated.View} style={[animatedStyles]} />
    </TouchableWithoutFeedback>
  );
};

export default Opacity;
