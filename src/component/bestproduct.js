import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bestproduct.css'
function Best() {
  return (
    <div className="best-product">
      <h1 className="title-best">Best product</h1>
      <p className="des-best">How to create mobile-optimized videos in minutes. Not a designer, every team makes a lot of videos Can be trimmed. Take the first</p>

      <div className="container row m-auto">
        <div className="product item1 col-xl-4 col-12">
          <img className="img-item" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/80E3BAB1-B937-4221-8175-E8D3B1B95A3B.png" />
          <div className="box">
            <p className="description-how">How to create mobile-optimized</p>
            <img className="img-icon" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/831C827A-2FCB-4239-AB7F-ADBFD62479DC.png" />
          </div>
        </div>
        <div className="product item2 col-xl-4 col-12">
          <img className="img-item" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/B07AE951-5105-48B2-8C27-69E06D222F63.png" />
          <div className="box">
            <p className="description-how">How to create mobile-optimized</p>
            <img className="img-icon" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/831C827A-2FCB-4239-AB7F-ADBFD62479DC.png" />
          </div>
        </div>
        <div className="product item3 col-xl-4 col-12">
          <img className="img-item" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/E656571C-7D6B-4819-AC80-8938E09F4AA5.png" />
          <div className="box">
            <p className="description-how">How to create mobile-optimized</p>
            <img className="img-icon" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/831C827A-2FCB-4239-AB7F-ADBFD62479DC.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Best;