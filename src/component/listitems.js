import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './listItem.css';

function List (){

  const ListItems = [
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/DD5A3AE8-9D3B-4385-9528-CF7C4659BB6B.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/C5117949-00F6-42A4-BF18-876D8831C3F9.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/63D95340-C0EE-4737-8F13-5C5ECEB26047.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/717AE8CC-486D-4EC0-95CB-1EE3CEBC641F.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/9EE030F3-B734-4253-8992-C4A20D8FECAA.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/9EE030F3-B734-4253-8992-C4A20D8FECAA.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/9EE030F3-B734-4253-8992-C4A20D8FECAA.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/9EE030F3-B734-4253-8992-C4A20D8FECAA.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/9EE030F3-B734-4253-8992-C4A20D8FECAA.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    {
      url: 'https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/9EE030F3-B734-4253-8992-C4A20D8FECAA.png',
      title: '[What happen] How to create',
      price: '2,500 won',
      heart: '236'
    },
    
  ]

        return (
          <div className="item container row">
            {
              ListItems.map((item, index) =>
                <div className="itemLi" key={index}>
                <img className="imgItem img-fluid" src={item.url}/>
                <p className='title-item'>{item.title}</p>
                <div className="price-heart">
                  <span>{item.price}</span>
                  <span><i class="fas fa-heart"></i>{item.heart}</span>
                </div>
                </div>

              )
            }
            <button className="btn-see-more">See More</button>
          </div>    
    )

}
export default List;