function DropdownMenu(props) {
    if (!props.ddmenu) {
      return null;
    }
  
    return React.createElement("div", {
      className: "folder-list"
    }, React.createElement("a", {
      className: "su",
      href: "listofusers.html"
    }, "search users"), React.createElement("a", {
      className: "sp",
      href: "searchphotos.html"
    }, " search photos"));
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showMenu: false
      };
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showMenu: !state.showMenu
      }));
    }
  
    render() {
      return React.createElement("div", null, React.createElement(DropdownMenu, {ddmenu: this.state.showMenu}), 
      React.createElement("button", {onClick: this.handleToggleClick}, this.state.showMenu ? 'close ▼' : 'open ▲'));
    }
  
}
  
  ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));