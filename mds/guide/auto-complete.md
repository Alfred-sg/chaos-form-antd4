---
group:
  title: guide
---

# AutoComplete

自动完成。

## features

* antd 功能。

## demos

### demo 1: 基本功能

```jsx
import React from 'react';
import { Form, AutoComplete } from 'chaos-form-antd4';

export default () => {
  return (
    <Form labelCol={3}>
      <AutoComplete options={[{
        label: 'author', value: 'author'
      }]} />
    </Form>
  )
}
```