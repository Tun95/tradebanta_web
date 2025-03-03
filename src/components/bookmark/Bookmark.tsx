import PostCards from "../home/post/PostCards";
import "./styles.scss";
import l1 from "../../assets/home/l1.png";
import l2 from "../../assets/home/l2.png";
import c1 from "../../assets/home/c1.png";

const List = [
  {
    id: 1,
    title: "Who will win the Ondo State Gubernatorial Election?",
    image: l1,
    slug: "ondo-election",
    endsIn: "2021-06-01",
    category: "Election",
    type: "election" as const, // Explicitly typed as "election"
    pool: 2000000,
    comments: 100,
    candidates: [
      { image: c1, name: "Candidate A", percentage: 80, id: "candidateA" },
      { image: c1, name: "Candidate B", percentage: 20, id: "candidateB" },
    ],
  },
  {
    id: 2,
    title: "Will Manchester United win against Arsenal?",
    image: l2,
    slug: "manu-vs-arsenal",
    endsIn: "2021-06-01",
    category: "Football",
    type: "event" as const, // Explicitly typed as "event"
    pool: 1500000,
    comments: 50,
    yesPercentage: 60,
    noPercentage: 40,
  },
  {
    id: 3,
    title: "Will there be a draw in the upcoming Chess tournament?",
    image: l2,
    slug: "chess-tournament",
    endsIn: "2021-06-01",
    category: "Chess",
    type: "event" as const, // Explicitly typed as "event"
    pool: 1000000,
    comments: 25,
    yesPercentage: 30,
    noPercentage: 70,
  },
  {
    id: 4,
    title: "Who will win the Lagos State Gubernatorial Election?",
    image: l1,
    slug: "lagos-election",
    endsIn: "2021-06-01",
    category: "Election",
    type: "election" as const, // Explicitly typed as "election"
    pool: 2500000,
    comments: 150,
    candidates: [
      { image: c1, name: "Candidate X", percentage: 60, id: "candidateX" },
      { image: c1, name: "Candidate Y", percentage: 40, id: "candidateY" },
    ],
  },
];

function Bookmark() {
  return (
    <div className="home_post bookmark_component">
      <div className="home_component_content">
        <div className="post_itmes">
          <div className="post_list">
            {List.map((item, index) => (
              <PostCards item={item} key={index} index={index} />
            ))}
          </div>
          <div className="load_more l_flex">
            <div className="btn">
              <button className="main_btn l_fex">
                <p>Load More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
