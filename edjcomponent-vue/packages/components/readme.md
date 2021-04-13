# 使用说明

## 引入方式

```javascript
import confirm from "xxx/comfirm";

Vue.use(confirm);
```

confirm的install方法提供了两种注入方式：

- 1.通过`Vue.prototype`挂载到Vue实例。
- 2.通过`Vue.component`方法作为全局组件引入。

另外也可以通过`confirm.show`的方法直接调用

### 1.通过实例方法调用

app.vue

```javascript
this.$confirm.show({
  confirmText: "confirm",
  message: "asdas",
  cancelText: "cancel",
  cancelCallback: function() {
    this.$confirm.close();
  }.bind(this),
  confirmCallback: function() {
    alert("23");
  }
});
```

### 2.直接调用

```javascript
import confirm from "xxx/comfirm";

confirm.show({
  confirmText: "confirm",
  message: "asdas",
  cancelText: "cancel",
  cancelCallback: function() {
    this.$confirm.close();
  }.bind(this),
  confirmCallback: function() {
    alert("23");
  }
});
```

### 3.作为组件

```jsx
<edj-component-confirm
  :confirmCallback="confirm"
  confirmText="confirm"
  cancelText="confirm"
>
  <template v-slot:message>
    <p class="blue">asdasd</p>
  </template>
  <input type="checkbox" @change="change" />
</edj-component-confirm>
```

> name为message的插槽会覆盖掉message props
