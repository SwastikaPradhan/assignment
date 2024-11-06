import styled from "styled-components";

const SingleProduct = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="product-data">
                    <h2>Product Title</h2>
                    <div className="product-images">
                        {/* Example placeholder image */}
                        <img src="https://via.placeholder.com/150" alt="Product Title - Image" />
                    </div>
                    <div className="product-data-info">
                        <span>Some Info</span>
                        <span>More Info</span>
                    </div>
                    <div className="product-data-price">
                        <span className="product-data-real-price">$99.99</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn || '#ff6347'}; /* Fallback color */
    }

    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      height: auto; /* Responsive image */
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;

