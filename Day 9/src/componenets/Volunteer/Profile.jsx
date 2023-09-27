import Footer from "../Footer";
import Gallery from "react-image-gallery";
import "../../assets/css/Volunteer/Profile.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import trump from "../../assets/pics/trump.webp";
import green from "../../assets/pics/green-earth.jpg";
import daisy from "../../assets/pics/daisyy.jpg";
import river from "../../assets/pics/river.jpg";
const Profile = () => {
  // const enrolledEvents = useSelector(
  //   (state) => state.enrollment.enrolledEvents
  // );

  const eventsprof = [
    {
      id: 1,
      title: "Green Earth Summit",
      date: "2023-10-15",
      location: "Mumbai, Maharashtra",
      image: river,
    },
    {
      id: 2,
      title: "Clean India Campaign Launch",
      date: "2023-09-22",
      location: "New Delhi, Delhi",
      image: green,
    },
    {
      id: 3,
      title: "Eco-Friendly Cleanup Drive",
      date: "2023-11-05",
      location: "Bengaluru, Karnataka",
      image: daisy,
    },
    {
      id: 4,
      title: "River Restoration Workshop",
      date: "2023-08-28",
      location: "Chennai, Tamil Nadu",
      image: daisy,
    },
    {
      id: 5,
      title: "Green Cities Symposium",
      date: "2023-10-02",
      location: "Kolkata, West Bengal",
      image: river,
    },
    {
      id: 6,
      title: "Environmental Awareness Walk",
      date: "2023-09-10",
      location: "Hyderabad, Telangana",
      image: green,
    },
    {
      id: 7,
      title: "Tree Plantation Drive",
      date: "2023-11-18",
      location: "Pune, Maharashtra",
      image: trump,
    },
    {
      id: 8,
      title: "Clean Beach Cleanup",
      date: "2023-08-15",
      location: "Goa",
      image: daisy,
    },
    {
      id: 9,
      title: "Sustainable Living Expo",
      date: "2023-09-28",
      location: "Jaipur, Rajasthan",
      image: river,
    },
    {
      id: 10,
      title: "Wildlife Conservation Seminar",
      date: "2023-10-07",
      location: "Chandigarh",
      image: green,
    },
  ];

  const images = [
    {
      original:
        "https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/hitler-960x700.jpg",
    },
    {
      original:
        "https://media.cnn.com/api/v1/images/stellar/prod/230616115528-barack-obama-2022-file.jpg",
    },

    {
      original:
        "https://static01.nyt.com/images/2021/08/22/books/review/Richardson1/merlin_191249559_370fa152-b033-48bd-9747-f8406cdc4d40-jumbo.jpg",
    },
  ];
  return (
    <div className="volunteer-prof-overflow">
      <div className="volunteer-profile-container">
        <div className="volunteer-profile-photo">
          <img src={trump} alt="Profile" />
        </div>
        <div className="volunteer-username">
          <p>Adolf Obama</p>
        </div>
      </div>
      <div className="volunteer-description-box italic-text">
        <p>
          🌟 Hi there! I'm Adolf Obama, your friendly neighborhood volunteer on
          a mission to make the world a better place, one smile at a time. 😊 🌍
          Earth enthusiast, 🌱 nature lover, and 🐶 pet whisperer. My passion?
          Saving the planet and spreading positive vibes wherever I go. 🎉 When
          I'm not volunteering, you'll find me chasing adventures, exploring new
          places, and sipping on ☕ coffee like it's my superpower. 💪 I believe
          in the power of unity, kindness, and community. Let's team up, change
          lives, and create lasting memories together! Join me on this
          incredible journey. 🚀 #VolunteerLife #ChangeMaker
        </p>
      </div>
      <div>
        <h2 className="volunteer-gallery-heading">Gallery</h2>
        <Gallery className="gal-vol-gal" items={images} />{" "}
      </div>

      <h2 className="volunteer-profile-event-heading">Events Enrolled</h2>
      <div className="volunteer-event-prof-pos">
        <div className="volunteer-event-list-profile">
          <Container fluid>
            <Row>
              {eventsprof.map((event) => (
                <Col key={event.id} xs={12} md={6} lg={4}>
                  <Card className="event-card11">
                    <Card.Img
                      src={event.image}
                      alt={event.title}
                      className="event-image11"
                    />
                    <Card.Body className="event-details11">
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>Date: {event.date}</Card.Text>
                      <Card.Text>Location: {event.location}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Profile;
