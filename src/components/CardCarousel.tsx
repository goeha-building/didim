import React from 'react';

interface CardCarouselProps {
  cards?: Array<{title:string, body:string, img?:string}>;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards=[] }) => {
  if (!cards.length) return <div>카드가 없습니다</div>;
  return (
    <div className="card-carousel" style={{display:'flex',gap:12,overflowX:'auto'}}>
      {cards.map((c, i) => (
        <article key={i} style={{minWidth:200,border:'1px solid #ccc',padding:12}}>
          <h4>{c.title}</h4>
          <p>{c.body}</p>
          {c.img && <img src={c.img} alt={c.title} style={{width:'100%'}} />}
        </article>
      ))}
    </div>
  );
};

export default CardCarousel;
