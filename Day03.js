import React, { useState } from 'react';

const COFFEE_ITEMS = [
  { name: 'Espresso', price: 2.5 },
  { name: 'Latte', price: 3.5 },
  { name: 'Cappuccino', price: 3.5 },
  { name: 'Americano', price: 3 },
];

const TEA_ITEMS = [
  { name: 'Green Tea', price: 2 },
  { name: 'Black Tea', price: 2 },
  { name: 'Earl Grey', price: 2.5 },
  { name: 'Chai Tea Latte', price: 4 },
];

const PASTRY_ITEMS = [
  { name: 'Croissant', price: 2 },
  { name: 'Blueberry Muffin', price: 2.5 },
  { name: 'Chocolate Chip Cookie', price: 1.5 },
  { name: 'Cinnamon Roll', price: 3 },
];

function MenuItem({ name, price, onAddToCart }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

function MenuSection({ title, items, onAddToCart }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
    </div>
  );
}

function CartItem({ name, price }) {
  return (
    <div>
      <span>{name}</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
}

function Cart({ items }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      {items.map(item => (
        <CartItem key={item.name} name={item.name} price={item.price} />
      ))}
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}

function Day3() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div>
      <header>
        <h1>Coffee Shop</h1>
        <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUZGBgaGhwaGhocHBoeHR4YIxocGRocGBweIy4lHCErIRoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xABOEAACAQIEAgYFCAUJBwMFAAABAhEAAwQSITEFQQYiUWFxgRMykaGxFCNCUmLB0fAHcoKS0hZDU1RzorLC4RUkM2PD4vFEk9NFg6Oz4//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJhEBAQACAQQCAgEFAAAAAAAAAAECERIDITFRQWETIpEEFDKBof/aAAwDAQACEQMRAD8A9L4lwNLgJGh7o/J8DQRj7PoycxGUSc3KBue6jfiV5kPVYiaEOOXNDIENIIIkAn60bD8a4XLu6ydu4YxfGBHUInsOhadBkn1hPMad9ZvE7lp1DlyHP0RrBLEkMsaRmOs61U4lfzMEGUsmismoOgPVgSdQQOyq1qS5LErmE6DfYyZPPfxNXVs34ZnepCgklGEQTBUaDs5zTBc03WdPoLtrP0fCrwYSYdwOyOW/1qe7ISsEmAsgqNTAnmdzPtpydeLOkwOsnhl2/u7VMvWcBWQGRl6pGvL6MV1x9oRyGQbT7qVpVkDMJnTqjfxq7TjWfiB3qf1ZA94FGH6NEm5iu7Dn3kUJYkjlB2mBH1u7sijT9Fw6+K/sAPefwrpPDjfKt0IWcJjxv80mwJ+jc7NtxQhajmB7Y19tFHQDiqWna1cyZL6C2WOhDa5ZbkDmI8cu29Z3SPgZwmIa0SCsBkY7lDtMaSCCD4VKsndmAdw/e/1pFBG3vFS+i7MsaSZO/Pc0mtabL+9r8am3TSuU7j7aQEbqfz5U+4kHlM/WHnzriqO46dtXaaXuDjrmt5RWNwO0S5oiGGNc8q1IjCCpsPhWdgiKWY7AD8wO+nWcKzEAc/zNH3BbKWLQaPW2+sxH0j2D4DxrE7re0CWK6EYt1CpcS0JkwXzHfcqIMdk0sb0evW1llzAASyyR3k8/OvQuH3mdSW05CDp5c/bVPivFAilVBnaTy5edXKzjtnHfLWnl11KrslEPFcIGOdBE+sBtPaKy2wZrOOTpljWcyUM8ztzo0bCmhFrepiefurpjkxligzeFKdRMezlUqaiNZmduQB0poMEakxyj3b10256R5t9vZTZp5HefZXG/OlVDa5Xa5VZKlSpUHaVcpVR73j8QWOtB/Su6AmVuqLhhT1j15DKsAaAxvOgnnFFPFcNddCtn1+RKz5GdPb28t6BeN8PNiWvEXXzK7FTKq0j5tOrALNlzOBoBBGqmuMjpb6C75A5aA8O5KjMNJgKSdR4rO+u1TcNu5pzF+rGin6PZ3VTtgM+UB+sRK8yxMAAx37kVd4faKyGtvIOo2OYaHTLNXKdjp/5NC2xOme6NCdvOB1qQuHXr3D3xrz+1+YqS0hM9VxoT+dK4xMQBdGoM69/Z4j2Vx29WkTnbrvBH1e8jWW7qjZ2YgLdYaiBlGh2Gzd59tTNmBHWvaidAZ5j63dSN7O0ZroMcxOyz9burU2zZGDjGncztrEdtG36Kx1sZ/Yp/n/CgviLgt6zH9Ya8+80b/oq3xp/5Sf8AU/Cu08PLlNZA1LIyKwZNFUwV1mBv1TOtGH6TkjFWwWn5qZZQdS32V125zQtgHlFGciQo9RSNgOZow/Shl+WW5/odNAdczRM9m9Zl8utneBFLZIPWtwCJ6rDUzGyd1RsiwBmQ6GT1xrO2w5R76toxVGKukSAwKDnJG6mdjUN5wYhk0GpyAayTyTsgeVY26cUBtKDqUPMwT40rdmQYyaAT1o7gdT8KlcBWIZkMSPUO8ED6HbFNSSDGSOcKR4fRpaSNXoxYl2ovTDihnoqhzPt5eFF6JU8sXtUK2gCO0z+fhWqjFsoOyqAB3RPv3qhct6FuwH7quWQvLkdO+s2Nyijh8BBFD/GgpcTrLadg0Pt23rbwkG2T4/ChbiN8nEWLQVma47GRsqqpLM3d1h+YrWU3JGMO2VqpjrvVQBRo0ExqQSBr4SaqXfCtLEYcknXTNv2warXLdYkdLWU6TQLdtkuRr6xE+dejtarz7E2/nHED12HrD6xrpj2YvdTUGIho3/OlJkI5NP57qeQcpBURIPrDeDzB7/dXGtiAefPrDTWujnoxVMxDc9/CaZr2NUlxZJJGsknUb6/fTCNIjn2irGbDSu2jU3L404pH/kUiJJkRufvqpTKVdiuRVZKlXKVUfQmMxzMpAnY6TueWwHxryPi+KuOrOUIUEAhiARqNAgGmp2769Ou3lT1jFA/GuB4h3u+jtZ0d86kPbEyFJ0LA7zXDqY707dLLW/gJPipUAgjLsZnWpMLxDIysevBBgmCSDO9X7nRbGf1dv3rf8dXOj/RK6cShxNopZUlnJZIMDqr1WJ1aPKasxmlueq4OGPlLGzdAAneNZA2yaaEnyqJEdnDiy7RlETp1QBHqfZ18a9cxdzMjgNMowjTUlTpXn3AeE3VvWs+HdVW6jliwgR9YRsKzxu2sc9y2slsEygMbV7WTzgakakIOym2y56kXRLTzMaR2TXs5xSDUuoHaSB99cF9dIdI8vdrW+H2xetv4fPvGID89h6xBPPWfuoy/RX6uP/s7fwvfhVnpvhHfHWWRC6C0ZZEYqDNzRiJE6jnzFd/RnZe0mKF1GtsypAdShOlyYDQTuPbW52mnO3d2FuG3FFkDO8kLGggQeXX50SfpSaMba6xHzXLX6Td4r0TD20yDRNtoFV8Th0fEEsiN1FALKDzbQE1nj5aue7Pp5Kzq0H0jZQbYIKDXqnMdzuQx86ruVP8AOA8tUHKdvIivamwFk6GzaPcVT8KY3CbB3sWj+wv4Vnhfbp+WeniuKlWKl1LBtTkX8Kaj6GHQaCeoNeX1e+vZ7nBsO2+HtHvyLPtioR0cwv8AVreu/V75qXCk6snw896H6l9Z15COXgKMlSocTgLdrEFbdtUU21JCiATLiY7dAPKriCpJpLlu7JbXbT8HhiHA3WdDuR41ItTLSxqeGh6EfX3nSY17xT1wY3B68EZoiFJEgT4Csu7iWzIAzbsTryAj4kVOt5hqCZpuT4Z45X5U8XbAMAQBpFULtutC8ZqpcFRtRdK83x6gX3BCkekYGSds5HbppXpxTWoW6JYVwztbJdsxJL3ACxJ1gNET3VZGeUjyyORyZZBMN5dvfUNwCTAQjl1j/FXsa9DMCP5jfTV3I7ebd1Qv0JwUyLRHgxj311mLnllt5DdmSSBJM6Ht1HPvphbSABGhOvOPHvNes4noZg8pJtmQAAc7g6QBz7gKy36JYblbb99v4qrNrzkAayBtprzkd/ZNNNH79FMN9Rx+2fxNVrnRrDjZW/eNNoCK5Rbd4FZGyv8AvedVm4Pa+qw/aps0G4pUQf7Ms9lz8+VKrtHovG7nV8DV3C3pRT3CsPit4kMsU/gnEkZShPWSAwg89Ry18qzK1Y3jcqDEdZSJNQviV7DVa7iY7aqLPDsVKwSZXQ1cN/vobw2NUXX13Anxq4cXOxoLmPeUYTypmAxYKKSeX+lUMRjOqR3Gs3hmL6kTEE/GiyClHDEDtIrA6aXMuIMd3wFaHBsQrXAAQSpWQCJE6iRymsf9IaH0xglSeY3G1crf2jrjO1bmAxoZVPcKkx+JCoWnYqdP1htQZwS04Q/OTmZDrOgUtP0tyG9wre4le+ac/Zrp8OVn7DfB4oOiuMuo11jXn76lkfZoV6L46DkJENt+t7eY+AooL94/PnSeC+XSe5fb/pTcx2yr+9/20i/aR+fOmtcA+kv5251Rh48Ridgvza7bes+uwqZTVTH3JxJgqfm09Xxffv8Auip1euTp6WVNTA1VV6kV6lahMZuD7KH+8w/gqdjVIP8AON+on+J6sM9RXHNVLxqd3qrceqUxTrWvh5gae/7uVYmbWtXDTlBCg95OvwNaxYyXg3aPf5ffSbwriJMaD2/6U5k7QPz5V0c2fjm6ojme3urLuE/ljWljl0Bgd35is5/D8+yiKl4n8k1UuT3x41duA9g9v+lU789g9vf4dxoqje86pv51bvDu/MVVcdw/PlWRHkpU/KOwfnypVoYFzh2JXdWPkDUQtYn6rD9lfwr11+OYVt7Y9tU7mLwZ5Fa8H9zl9PZ+DH5ln8PM7djFHbN7F/CrCcPxh5n+7R6y4VvVuFfz4VC+ET6OJA8Y/Gpf6nqfGm8f6bp/YHxPDsTbQu7QsqJBAMlgBtrzpzYTEpdVDnLFgAMzQTkz5d8u2u3KiDjmFKogN0OHvWlgH7YP3UxsddbFpZMZ7dx3n7XycD4GuuPWzuO79ueXRwmWp9KGNwWLW2XebKL6zMQdCcoEBdZJFYgxhH/qD+ykfcKPOOXr9zDvbbUEAxpqVYOB55Y86BLGBR/VMT31rpdXlN5VnqdLjdSRawvESplcY6MeeR57tVFaVvB38SZGLS+QJILlmA7SpOYVhX+GBTBetDoeUt4tLk/8MM0nbVSgH973VrLKatlv8M443erJ/LQ/k/i0HVYDuAP41T4kmMtBBeYhHZRz11GhmvST0oQ809lDvSviqX0RJAK3FcHvAbT2xXHDrZctW/8AHTLozjbrX+3Oj175xNV9b8e+jsv9pfz515/0bf5231k9b7ie2jlrw5OnnB+DCvZHkqRrv2l/PnTTe+2n5/aphukD10bbYaxsT68UmdonOgHaQfjnqoH+IXpxR1Bi2g08WOup11qyj1lYrHhsayZ0c+iQyg6sZmBE5mkgnt+kKv54BPYJrGm9rQenekrL4TjGu2UuOmQuubLMwpJy696wfOrZNZsalds3Zd+4qP7oP+Y1Ya7WZhn1Y9rH3dUe5RUrXKjW1lrlQu9QO+lRM9E2mza1q4S3IByIftE9b/Dp7awletzAPCZigaDptmPZvA3PM1vFjKtW1bMCVSY35/CpDb8KFl/SBhs72xYvTbzZzFoABGyuR19YPZ5VJxfpvh7IQvh7jLcXNbMWiGUaT65I3GhANdGGlxFdBou9ZDpucq/nyq9iMV6S2lxcqhgG11YBhMGDEie01QZZ06h/DwqCo9tDuqT5fhVd1E6BYjStB7QH1APCq923p9HUfETQZdxDPqj2/wClVXXuH58q0LtmTEJJkx4amqxs9oTy0oKjqRyHLn3eFKrK2vsr7T+FKihw8VQ/zceDGonxqH6486zEQkgDc6DxrTxGFQtojIgmT1iZ+iGDHq/nfSuX4sI6/lypoxS8nYVw4k8nNR4a2gZpQuumXVgSNfqnfbtqm25q/jjP5K0LWIbOnWmLiH2MDUdnEv6RnzdaN51k5V+FU0aDPZWjw/CiPSPB1IRDPWI3ZojqgwI5kN2EHXCSJztTLxK8dFdjHYSapfKSpJHM+/nW4GxJC5XZVOyhxbUDbqICBvA0FcXFKXCYxDcQGGJB9KvbkeQ2n1WJXTapjhjDLqZUOteYnerWFxpQEKBJ3JGpos45+j10t+nwlz5RaKhwsfOZCMwZY0fTXQA9gNA2atZYyzSY5Wd2g/EWPIVF8qLMvLrKffVTNSVtRUmGMXLqZXy9E6NXgLlvroNTv+q32qO0vLEB07N5/wA1eP8ABOJMmItjNIkdhgm2Qdo0BNEt3pNcBxLoy5cMEhMulwu2V851Iy8oI13nYaYHfpRzdCfzymsfG4l0cKrqWu8+SZSTr9XMNNfHXlLhMY5lHZG0DrcVSFdNJ0zHKwJ2k6EEc4G72V7oBcbuSB48476lqw3iVwjFriGKMhQWiyAgDQPLST6pKzrsxPKr+NxeS27/AFVY+YUkUDYrFfOsJ1zxpoSBvOvYIq2uHd9VDkTBg6du1Qgr4S7LbtWzqUtorEnWQkTB1Oqn21cFpySgbrPlKTyzaL7waw+jzNeJsh8uUqXJkxlGXaRLSO3tpvGsZkuejR2deqhYc50YE8uqT+6eyirb5xazhsotoGYaSeQ3O08tzI56VXwfEWd4OihdO8kLqfY3tNY2OxzZWQMSsgASY8fZPtrPxGKuLdUAnULp2kAga+Zqa3DeqPAZqC68VQ6PY83MywQU3BjzPlFal7hT3R1LgTL1iSpfMB9GARA7aSG1Rb2tbFrFpasm4+UIrBmbdoETCxrtG9Yh6OuL7Yf5S/Wtm5mKdYZWEhevoJYdumnfUIwVx8NcJvf8FiWATW5pID9aIA0Agjx2rUxS0J3MTlu37oRsl30wXMGXquxIbYgwDt/5q10ix6XrWFCB/mrXo3YqQufTRTz2qlxtR8ofJATNK5YjLA2jT8mpuDZDbxQfLItTbz5ZzdYQmbnr9HXQeWmXonRzE58KhhQIH5PfVkOAfo/CsboJaVsIRkzPmZicp9XMy+sdJ02nsmhjjmKyemtjqlcUXABI6sTEDlNLNA/dyTskf6Gq+IadlU8iZ5jyrzfHYgi/fJaCQwBBjmsAR3CKtXbsXsM5ePm7RIlp5zOkQfHnWdroYXpA9RPb/pVV3I+ikCNZO/soRxd45MQAxYemTUmdPnCI8wvspvD7uVic0n5Pd57Nkcj4CqaFPpH+ovt/7aVAM99KmhZwCZnQEwsyx7EXrMf3Qa0HxIdHcsR1ni3JOrFCpIPLR9e4VlEwCOZ5907ecCmqfz2a71LisybVm4toIxAPpHV42i2ABsIGpzD9isW4pDENuCQfEaGa7cuFjJPd5DQAeVImdautG9mCttHARDyCL95b+8WrFqzh8RpkY9XX/wAeE/E0qRexD52LTM7dw5DyGlRNic5AJnKMoPaBt7Bp4AVDibBB1BWYOojTcHXcVCXjY60Ho3R7pIyYeygYSjagmOoCwgd8EUM9N+HW0uC9ZYFLxdimnUeQWj7JzSOzUbRWMWZAs6BhK+FVb15n9YzFZm9rb20jrqnXafz3VyurvW0W8Njijq6ouYbaueUR63ZV1OJmHHyVYuf8QB8UA8NmGYC5B1186ZwgL6ZRlA37fqntr0HhVqy1s38nXzm3mltVzBYyzlGoBmJ0qIF7fTS+oCCwgVVChSbogKDuS8kxG87VHY6TOWlcFbZtdvTHfeevWT0hecTdI+vGncoH3US/o0jNf/8At/8AUq6Nsi1cV2dv9ngsmrAPivWLKIID6GHnyq5a4+LRKPglQlSRmuX0mASNzrMQO+rV/pa2GxGIREQB7suxDMYCKoPrDkBp41ldJOJpiXR3dGIXL1MyCJnXMDrU0bT2cU2VynDnHpAZdXxEwxDSpMjeDT8PinRVX/Zrtl5l70k7ydIJ1NbfCelIVFX0uGUAAQ/pJ001irmO6XFUJW9hGJhQFNwGTpMnQRqZPZTRsMYvGJlB+Qy0jMA93QwTAOu3PSob3GUzLcbh5BQGD6S4ABtrKfGtzD8bUTlv4RWghWZnMd8QJ++q/E+K3Gw95bmNwl1GtspROq5kfQIG/dFNG1HCdIPRuzpgHDMNT6RzIPilTt0wuRAwtxBzy3WBPdJtHSjXo9irtxA1wWguVcgQsx21zkgDs27618g7BTRt5T/KFy+f0GKL5Sub5S+YKYLCfRyAYHspiccIDKMNiQH9cC+3W/W+a13Ptr1rII2FZPGuP4fCsi3sw9IGKlUzAZcszGv0hsDsapt5cXsmAcDf02+ffTw+a0pwe1EfI8QB/bt/8Nelp0pwJXMMQmvKGDfuEZvdVfF9McGhC5nZjqFW28nsjMFmoPOW9BEHB3/D05+Hoa5OH2+R34/tv/416/gb63UVwjJmnquAGUglSGAJgyDpUrWh2CivHcXibDuznCXQWMmL2k902a5exdlsk4S71FCD57kNp+Z31r157Q7BUL2h2D2UNvIxirIVl+S3YYqT892TEfM95rlnFWUJIw1zVWUze0hlKH+a7DXqzWV+qPZTGwyweqOXLvFE28m9Nh/6vc/94f8AxV2vU/kifVX2Cu02PGzSqXFWgjugYMFdlDDQMAxGYDsMT50wDTvq7JDaQNKu5aUhTSVCxCjdjA8ToKUVocAsZ8TZX/mKx8FOc+5TQGPS/DKLTEbKAB7QooEtW5NegdMX+YPeyj3z91BGGt1mNVodJLeW3hTG9sj2BPxofNFXStf93wp7FI9qL/DQrVnhK5XRXKcp1qou8PaLk/ZPwo44U5HDpG5uH/8AZQNgXlyR9U/CiXA8btthhhgrB88nbLGeTB8O4VANcTabrnv+4UTdAHj0x/U+D1hcdSXkDU0TcEui3hywUToNt2JyrmjcSR5VUrL6Q8OZrpcD4VUfg975ohMyPlhgNFnk3eKLncPbR8qdZFeDruJj30AYxmBZeRYtA23Ike+o1B7wvhjglFuJKgE5kddCSNJXXUbiqKpcxLl1dciZrYbKShM9Yr1ZPLXll76BkIB1UHuMx7oPvqQ3rcGbSyeZdtNI6o9+s0QdJeFsqGuWUzLmGfOgK7gglI99XLONVl+gdSOqoIPeCQCRz1Ary/OvaPaK3OjuKhsoyHXmaD1XAXBAj4RWkj0O4O6QB6vlWrbv0RoTQj0o4pbTEKjoj/NhoIUlSXI0nUaD4VN0z4m9rDFrdwo+ZYIiSCwDDXuNed4nHvdXPcfO8QWOWSJ0EacgNhVJB5Zw+GvN6WMuRQcyquwnTcbeFZPGunQURYQl12uPlJXtgDf2+2g5sU2QqHYA7qCQDz1GxqmRyq2kj3zh2F9HbRCZaJc/WdutcbzYk6aa6VaJEV5fi+ml/qFXhcgzrCZi8kkhssDTL9GpOF8XJxSXGuOytmJt5myBiQvqzliNdOfOsq9FcVE6GKZa4jbYwHQt9XMJnmImar8TvkIcrZTygxrGm/fFAvSAGuen3rzf+UV8W3zMwYuIbNJEEZgB5RG3Wre4cLhcWLtx87q9xCrnYpOVj9nSIG5MRRdWiXNSrEHGrdubbucyEocwknKcsk85ifOlRNMLE9BMSzuwazq7H1zzYn6tQt0FxKjrPYXxuR8VrNu8RuN6992nkzufdNUzdSe2s/s32aNzoy43xOE8rwP+FTT14NhlUZ8YM0aqlt3E9zaA+6sr5UOymHEnsFX9jsu3sNhl0F663hZUf4rgrS6JWbZxKshclEdusqgbZORP16G2cmiroMhzXX7AijzLE/4RTuz2afS9/m1H2/grfjQrYFEnSlpCD9Y/CsGwtUafSkf7rYPYUHttt+FCNGXSFZwid2Q/3SPvoOirEptKuxSAqizgGAfUxoR56VocKwj+lmPz+TW7wSyjWkJwFx2hvnUFuDqwDDMvZ8KZ0ZuG5nzAArkYa65HXOOWukVkvaLOMw1tFzuNBEmJMSAYHM1pcO4rgWTIiXXeIVUUjM8EAZc06nsFZfSdh6PJMDSfaKE3tWvouU7QczfBR7KrM7jtL+HS3bsXBdtXQltGzJs+UBhlLDsOu3WB5igVOJXLTubF90DEjMjMhKzIkA0kVF3uBvq+uCO2NCKiwuGzsQNRBI6wB0EkwYJA5kDSo0uDpRjf63f/APcf8af/ACqx39bvfvmq91LDJNsOWAli0AbaQJM65ie5e/TNiqNsdLscP/VXfNp+Iq/wjH4nGOLV287qSDkOWCRJliBsInyoVitPgl8o+ZTBFEr1HDcFKALntiBtn5bdlWl4eR/O2v3j/DWbcxasqkr2RvHbUL3x2VFO6R9H7uIUIhtMsatnIIaZEDLB8yKDuK9Hvk2Ha47zcLKgCjqgdk820me4+NF7cRKQBME9sUKdMGxTwLqOttNV6vVLRGZiNJgx7e2qBUAnvpy2zInSSOznTV8PdT8zbQY8PZyoNf5Em3p0/d/7qnsWlUqRibQI55T7+tWCWPaaWY9prOr7a3PQhwaol9HOItmGLEw0atLHRpnmPCpLeOcExilyCcvJgJ7VjMYkdadzzoazHtrkntpq+zcaWItK294dsakSTrEn76sJfcPbcYrrW1yo0DqrlyxvrpprNYsntruYxM9o9kfjTV9m56alyyrEs93MxJLNK6kmZpVlZz2/Gu0432bnoynZIAPbPupq1K/qL+18RWmUT7mnWgJ623P2UmXU+dc/Dl99B1o5bcqNehiRZY/WuGPABR8ZoJr0DozYIw9sdoLfvEt99SiHpAslfA/H/SslLVEHFbBLjTYAe8n76y75COiEGXkCO0RvrpvWVVekN45FTN1fQo2X7XpFE+yaGaJcZgMRfuOlrDu4VVSRMaKrTJ0G+3eK6nRu22Ev3CbtvEYcr6S3cUBSGnKE0mSBO522gg1qIGaQqZcP9tPDr/ctdeyPrL5Z/vWqNHDJhsnWOKzhCSFyhJ3009Wam4LxN7FwG3lGe0Fb0s5TlYzlYaj1YB5SRymsqG2zns3eI7PCupbEglhp+sfitRRNj+kFt7Vy3csIrlCEuITE7chPug660HGauXEzEw4kmdmGnPU1sYPouHUMMSmvYmbykPUyyk8rjjb4Y3DLCs/XnINSeWmvW00BAavc7+NTDJcYKqWrVvMFVQoyquYqABzmvK8Zwx8LYcrdzhiAVyDLBK7hiwnq+81Fh+k2LulbT4jqPFtgbdsjIeqQerJ07/Okylm4XGy6rmC4vhwhd8Elx3L+kb0t1JZiSeqGKgHNsABTbnEsG3/0xAe35TiPgCKILvRxbyE2yux6oABJGgmXJA33HOhm3wS4WdXV7UDRjadge3Uaec86bNfDmFxWECnPgs5zH+fup1SSVEAnYQPKrdviuDX1eGgHt+VXz7iKtcT4RaZf92KNpPo0S4X0260nQ67ifGqGC4LeL9e1cTKM3WtOwY/V2gaTqdqqdhHa6SIiqr4a3sI67nSBGuaTvGi07E9IrWVCuFtszDULduaGTAiQT1QDtuY7awMPhLjI4DK0nOLapLtllRDEiBrsAZ0nlVzhXDnUzcRk66xnRhuQJzEEQO+fLep3Xss4/FQFJAB10EkAxsJ1jxre4xxEtYYEZYGVtyMwHvGxrD4rZRWUZ8zBjIyagZSxPVEGcunjWZi+L3VQ20GcRLEoxgwA3W+kNOYI176bNMniOEVOsrhwYEiJLZZfTsVtJ56VSW5G+vdT85KMCMrLr9KSJ102GhB/Z9u9wuxhvQpeFsu8FHVm6quI66DtMg6yNdBVKG7ynMdOZ7N+dMbTlWrct2UBGW5O85wfLQKKr2btgMC3pXWdV6qg+eYx4xVZUM1dzVNedCxyKVXkGIYgdhYKJ9gpqsO6iGIJMDfxjbWum2cpblmC78yGI+FSqg5R7qZfSPAn36/jVEM0qdmpVFcSpX2XwPxqJak3iSBAipVhgrqCd5HkD94q3Zw1s73API1p4bD4YetfTzB+5azcteJWphvzUfRtcEt0Pi2dkGqoqyGb7ZDTlHYN+emh9QwnSbhMALcRAIAUo6gAaAAZYAHdQCljh/0ryk9wcfBa42G4d/T+z0v8JqTP6pcPuPS7vGOFxmN21HbJrFxfSzhKNKobjDTqoR7C5Ueyg8/7OBn0ub9i58cldN/AcrpHgl77gKcvqnCe41r/AE/tK5fDYXI2zEsoDjYZ0UdYiBDZgRETBginEOI3LzM91i5Y5iASozRlHVgjQaDXStY4vARq8+Ntz8RUicRwI/nD5Wm/Cs3LL1W5jj7CB10C+4k+Z/CKXoW+q3sNGa8YwI+kx/Yf8alXpBgR9f8Acb72q88vRwx9gcWW+qfYad8mb6jew0bN0iwP/M/c/wC6mfyiwP1Lp/YU/F6nLP0cMPYNTCOxgI0+FeidHcMttFDMqmOZH4Vnr0nwI/m7mn2E/jp7dLMEfoXvJLY/z1nKZ5eY1jcMfFS9McQrYd1DKdUIjf11+6aDOCXct+20Aw0wwkbHeii70nwh2XE+WUf9SuWelWFU6JiD4i3/AB1cZlMdaMuNu9svj+DfEXc4RFEAQqkCRzPVqnh+j18nQJptmMj2ZSPbRP8Ayzw39Hf9lv8Ajrn8tMN/R3/Yn8VJ+STWks6du9sK/wBGMS2/ovIBfggpidFMQpzEIANZJkDvIKxW/wDyzw39Fe//AB/x1z+WmG/or39z+Om+p6XXT9qt7gnyhkQmzbKpDOltmLkQAWzQfVG4O5Pbpn/yeew0qQ30Ya2yh0OjAHXw862V6XYMGRh7wPaCqn2hxTLvSzCsZNrEmNpefi5q7z0zrDanhuH3kh2NnIJ0yBdOQJRJHkfA1bGGe/dYW7tqyuWVREZu4ySgJnUz5U5el+GAgWbsdhyfxVxelmEUymGuK3auVferikufzCzD4qpxHhF8QWvI4UwQyFDliOqSvZOkjlXb2DFu3KEvmjMiwVBjUgKN+VTX+leGbU2r897lvi9NTpbYEBbLgeCfxRUvPfhZw15DmMxA2gg9hEVnTRhf6TWW3tv5rbP+aq78aw06WXH7Nv8AGtzLL0zccfbFs8Nd0DoVbeUBhhBjYwD26E71VdCphgVPYRB9homt9ILC7Jd/uD765iOP4ZxDWXYfayGPDXSkyy+Ylxx+KGo76aavY25h21to6HsYhh8ZHvqia6RzrlKlSqjq06lSqBRSilSoORSilSoO5aWU12lQcymuZa7SoFFcpUqBRSilSoFSilSoFFKKVKgUV2KVKg5FKKVKgUUstdpUHIpRSpUCikaVKgVKKVKg5NdpUqDlI0qVBylSpUH/2Q=='></img>
        <p>Welcome to our shop, where we serve the finest coffee, tea, and pastries.</p>
      </header>
      <nav>
        <ul>
          <li><a href="#coffee">Coffee</a></li>
          <li><a href="#tea">Tea</a></li>
          <li><a href="#pastries">Pastries</a></li>
        </ul>
      </nav>
      <main>
        <MenuSection title="Coffee" items={COFFEE_ITEMS} onAddToCart={addToCart} />
        <MenuSection title="Tea" items={TEA_ITEMS} onAddToCart={addToCart} />
        <MenuSection title="Pastries" items={PASTRY_ITEMS} onAddToCart={addToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Day3;