import React, { Component } from 'react'

export class GaryBot extends Component {

    replaceText = (userInput) => {
        return userInput.split("").map(value => value = "Meow")
    }

  render() {
    return (
        <>
        <h1>Gary Robot</h1>
        <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Gary-the-Snail.SpongeBob-SquarePants.webp" />
        {/* <p>I hear you saying, "{this.props.userInput}." Is that correct?</p> */}
        <p>I hear you saying, "{this.replaceText(this.props.userInput)}." Is that correct?</p>

      </>
    )
  }
}

export default GaryBot