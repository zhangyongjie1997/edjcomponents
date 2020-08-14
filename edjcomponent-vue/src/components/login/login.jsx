/* eslint-disable prettier/prettier */
function Login () {
  return {
    functional: true,
    render (h, context) {
			console.log(h, context)
			return h("div", {
				attrs: {
					class: "edj-login"
				},
				// "class": props.class,
				props: {
					phone: ""
				},
			}, [
				h("input", {
					attrs: {
						value: 1,
						class: "edj-login-phone"
					},
					on: {
						input: function(e){
							context.listeners.input(e)
						}
					}
				})
			]);
    }
  }
}

export default Login;