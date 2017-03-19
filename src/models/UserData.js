export default class UserData {
  constructor(name, profileImage) {
    this.name = name
    this.profileImage = profileImage
  }

  getName = () => this.name
  getProfileImage = () => this.profileImage
}
