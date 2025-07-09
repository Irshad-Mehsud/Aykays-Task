import React from "react";
import "./UserReview.css";

const testimonials = [
  {
    stars: 5,
    text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    name: "Emily R",
    country: "USA",
    img: "https://i.pravatar.cc/40?img=1",
  },
  {
    stars: 5,
    text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online",
    name: "Amit K",
    country: "India",
    img: "https://i.pravatar.cc/40?img=2",
  },
  {
    stars: 5,
    text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    name: "Sophie M",
    country: "UK",
    img: "https://i.pravatar.cc/40?img=3",
  },
  {
    stars: 5,
    text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand",
    name: "Javier L",
    country: "Spain",
    img: "https://i.pravatar.cc/40?img=4",
  },
  {
    stars: 5,
    text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    name: "Lucas T",
    country: "Brazil",
    img: "https://i.pravatar.cc/40?img=5",
  },
  {
    stars: 5,
    text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense",
    name: "Nora S",
    country: "Canada",
    img: "https://i.pravatar.cc/40?img=6",
  },
];

const UserReview = () => {
  return (
    <section className="user-review-section">
      <h2 className="user-review-title">What Our Users Say</h2>
      <div className="user-review-grid">
        {testimonials.map((item, index) => (
          <div className="user-review-card" key={index}>
            <div className="stars">★★★★★</div>
            <p className="review-text">{item.text}</p>
            <div className="reviewer-info">
              <img src={item.img} alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <div className="reviewer-country">{item.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="see-more-button">See More</button>
    </section>
  );
};

export default UserReview;
