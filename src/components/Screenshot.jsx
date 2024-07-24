import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import '../styles/cv.css'

const Screenshot = ({ captureRef, name }) => {
    const captureScreenshot = () => {
      if (captureRef.current) {
        html2canvas(captureRef.current)
          .then((canvas) => {
            // appends the canvas to the body or another element
            document.body.appendChild(canvas);
  
            // converts the canvas to an image and download it
            const img = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = img;
            link.download = `${name} resume.png`;
            link.click();
          })
          .catch((error) => {
            console.error('Error capturing screenshot:', error);
          });
      } else {
        console.error('Invalid ref: captureRef is not pointing to a valid element.');
      }
    };
  
    return (
      <button onClick={captureScreenshot}>Save CV</button>
    );
};

Screenshot.propTypes = {
    captureRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    }).isRequired,
    name: PropTypes.string,
}
  
export default Screenshot;