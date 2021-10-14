import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './happend.css'
function Happened (){
  return(
    <div className="happend ">

      <div>
      <p className="happend-title">Happened’s issue</p>
      <p className="happend-content">
      모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
      </p>
      <button class="btn-seemore">see more</button>

      </div>
      <div className="row block-all">
        
        <div className="block block-1"> 
        <p className="whpn-issue">whpn issue</p>
        <img className="arrow-img" src='https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/F70680D9-7FC7-4E04-884A-44FC7A8BE9F2.png'/>
        </div>
        <div className="block block-2">
          <div className="bg-brand">
            <p className="b-brand">b brand</p>
          </div>
          <div className='img-brand img-brand-1'>
          </div>
        </div>
        <div className="block block-2">
          <div className="bg-brand">
            <p className="b-brand">c brand</p>
          </div>
          <div className='img-brand img-brand-2'>
          </div>
        </div>
        <div className="block block-2">
          <div className="bg-brand">
            <p className="b-brand d-brand">d brand</p>
          </div>
          <div className='img-brand img-brand-3'>
          </div>
        </div>
        <div className="block block-2">
          <div className="bg-brand">
            <p className="b-brand">e brand</p>
          </div>
          <div className='img-brand img-brand-4'>
          </div>
        </div>

        <img className="img-hot" src='https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/4C723DB7-B4BD-433D-B2E3-D34A2E0F1DB7.png'/>
        <img className="img-lol" src='https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/A967E2DB-5BED-433E-BFB9-D47716B994C0.png'/>
        <img className="img-coin" src='/images/news-object-03.png'/>
        <img className="img-xx-1" src='https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/297831BF-7E68-4E36-B1F8-C68C4CC32C24.png'/>
        <img className="img-xx-2" src='https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/AFFD1B68-D3E8-48B8-9900-87E09160EC1A.png'/>
      </div>
    </div>
  )
}
export default Happened;