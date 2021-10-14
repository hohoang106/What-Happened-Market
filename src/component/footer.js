import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer(){

  return (
    <div className="main-footer">


      <div className='footer-top row container'>
      <div className="col-xl-6 col-12 block-footer-1">
        <p className="title-footer">what happened</p>
        <ul>
          <li>
            <a>[공지] 개인 정보 처리 방침 변경 사전 안내</a>
          </li>
          <li>
            <a>[공지] 개인 정보 처리 방침 변경 사전 안내</a>
          </li>
          <li>
            <a>[공지] 개인 정보 처리 방침 변경 사전 안내</a>
          </li>
          <li>
            <a>[공지] 개인 정보 처리 방침 변경 사전 안내</a>
          </li>
          <li>
            <a>[공지] 개인 정보 처리 방침 변경 사전 안내</a>
          </li>
        </ul>
      </div>
      <div className='col-xl-6 col-12 row'>
        <div className='col-3'>
        <p className="title-footer">about us</p>
        <ul>
          <li>
            <a>회사 소개</a>
          </li>
          <li>
            <a>인재 채용</a>
          </li>
          <li>
            <a>상시 할인 혜택</a>
          </li>

        </ul>
        </div>
        <div className='col-3'>
        <p className="title-footer">my order</p>
        <ul>
          <li>
            <a>내 주문</a>
          </li>
          <li>
            <a>주문 배송</a>
          </li>
          <li>
            <a>취소 / 교환 / 반품 내역</a>
          </li>
          <li>
            <a>상품 리뷰 내역</a>
          </li>
          <li>
            <a>증빙 서류 발급</a>
          </li>
        </ul>
        </div>
        <div className='col-3'>
        <p className="title-footer">my account</p>
        <ul>
          <li>
            <a>회원 정보 수정</a>
          </li>
          <li>
            <a>회원 등급</a>
          </li>
          <li>
            <a>마일리지 현황</a>
          </li>
          <li>
            <a>쿠폰</a>
          </li>
        </ul>
        </div>
        <div className='col-3'>
        <p className="title-footer">help</p>
        <ul>
          <li>
            <a>1 : 1 상담 내역</a>
          </li>
          <li>
            <a>상품 Q & A 내역</a>
          </li>
          <li>
            <a>공지 사항</a>
          </li>
          <li>
            <a>자주하는 질문</a>
          </li>
          <li>
            <a>고객의 소리</a>
          </li>
        </ul>
        </div>
      </div>
      </div>
      <div className='footer-bot container'>
        <p class='content-copyright'>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
      </div>
    </div>
  )
}

export default Footer;