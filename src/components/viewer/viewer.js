import React, { Component } from 'react';

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: props.phone.images[0],
    };
  }

  selectImage = imageUrl => {
    this.setState({
      selectedImage: imageUrl,
    });
  };

  render() {
    const { selectedImage } = this.state;
    const {
      onBack,
      addToBasket,
      phone: { name, description, images, id },
    } = this.props;

    return (
      <div>
        <img className="phone" src={selectedImage} alt={name} />
        <button onClick={onBack}>Back</button>
        <button onClick={() => addToBasket(id)}>Add to basket</button>

        <h1>{name}</h1>
        <p>{description}</p>

        <ul className="phone-thumbs">
          {images.map(imageUrl => (
            <li key={imageUrl}>
              <img src={imageUrl} alt={name} onClick={() => this.selectImage(imageUrl)} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Viewer;
