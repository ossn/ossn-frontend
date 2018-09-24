import React from 'react';

export default (props) => {
  return (
    <div>
      <div>  {/* this is  the header */}
        <div>
          <img src="#" alt="club cover"/>
        </div>
        <div>
          <div>
            <img src="#" alt="club profile" />
          </div>
          <div> {/* club inforamtion*/}
            <div> {props.club.title} </div>
            <div> {props.club.subtitle} </div>
          </div>
        </div>
      </div>
      <div> {/* Two columns layout*/}
        <div> {/* Description section - left column*/}
          <h4>This is a paragraph title</h4>
          <p>
            Here goes the description
          </p>
          <h4> title no 2 </h4>
          <p>
            p no 2 etc
          </p>
        </div>
        <div> {/* list of links section - right column*/}
          <div> {/* CTA */}
            Become a member
          </div>
          <div> {/* the links */}
            map <br/>
            link1 <br/>
            etc <br />
          </div>
        </div>
      </div>
      <div> {/* Member list */}
        import the list of members component
      </div>
    </div>
  )
}
