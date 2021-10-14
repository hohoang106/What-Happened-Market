import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './brandstory.css'

function Brand (){
  return (
    <div className="brand-box">
    
      <p className="brand-title">Brand Story</p>
      <p className="brand-des">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
      <div className="box-collab container p-0">
        <div className="Rectangle-668"></div>
        <div className="row content-img">
          <img className="col-xl-6 col-12 img-collab" src='./images/img.png'/>
          <div  className="col-xl-6 col-12 Rectangle-667">
            <p className="what-brand">What Happened’s Brand story</p>
            <p className="des-what">청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>
            <button className="button-seemore">See more</button>
          </div>
        </div>
      </div>
      <img className="img-1" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/D5C7C5A4-ED98-4F3F-8DBC-9581EF4FDEB5.png"/>
      <img className="img-2" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/138E9440-88B2-4FAB-8FCF-7A0EFB6959DD.png"/>
    </div>
  )
}
export default Brand;