import { Scrollbars } from 'react-custom-scrollbars';

const CustomScrollbars = function({ children }) {
  let timer;

  const handleScroll = e => {
    let scrollView = e.target;
    scrollView.classList.add('scroll-view--scrolling');
    clearTimeout(timer);
    timer = setTimeout(function() {
      scrollView.classList.remove('scroll-view--scrolling');
    }, 1200);
  };

  return (
    <Scrollbars
      universal={true}
      autoHide
      renderTrackVertical={props => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={props => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={props => (
        <div {...props} className="scroll-view" onScroll={handleScroll} />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbars;
