const apikey = '6pmyhyx2yRZYYu5yT1gTpNtLW0mCq6pzHvynPwl5BGI2hvjKpAP4-I3k8Rn_4QgKMt47kILUL0oE585hKt9qBaenE8eubPPVBOwH9xBLVErZiAav79006ct5_TIeX3Yx';

const Yelp = {
    searchYelp (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apikey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipcode: business.location.zipcode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCOunt: business.review_cOunt
                      }
                });
            }
        })
    }
};


export default Yelp;