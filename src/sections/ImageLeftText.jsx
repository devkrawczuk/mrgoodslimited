import React from 'react';

function ImageLeftText({ imageSrc, imageAlt, id, title, text, full = false, backgroundColor, textColor }) {
  const wrapperStyle = backgroundColor ? { backgroundColor } : {};
  const wrapperClass = !backgroundColor ? 'bg-orange' : '';
  const textStyle = textColor ? { color: textColor } : {color: 'white'};

  const content = (
    <div className="row py-5" id={id}>
      <div className="col-md-6 align-items-center px-5">
        {title && <h3 className="mb-3 fw-bold position-relative z-2" style={textStyle}>{title}</h3>}
        <p className='position-relative z-2'style={textStyle} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className="col-md-6">
        <img src={imageSrc} className="img-fluid" alt={imageAlt} />
      </div>
    </div>
  );

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      {full ? content : <div className="container">{content}</div>}
    </div>
  );
}

export default ImageLeftText;
