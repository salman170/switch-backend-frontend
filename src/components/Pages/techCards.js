import React from 'react';

const techCards = (img, head, prag ) => {
  return (
    <div>
      <div className=''>
        <div className='icon-block' data-aos='fade-up' data-aos-delay='100'>
          <h3 className='title'>
            <img src={this.props.img} className='icon' width='40' height='40' alt='Icon' />
            <span className='text-blue web-font-1'>{head}</span>
          </h3>
          <div>
            <p className='text-sm'>{prag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default techCards;
