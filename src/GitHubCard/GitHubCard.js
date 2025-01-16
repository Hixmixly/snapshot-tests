import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/pictures/profile-pic.jpg" />
    <Card.Body>
      <Card.Title>https://github.com/Hixmixly</Card.Title>
      <Card.Text>
        I like painting, movies, and exerciseing. 
        One of my goals is to work in the gaming industry, the main dream being game designer
        but I would settle for working in the art department. Working in the art
        field would also be nice.
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default GitHubCard;