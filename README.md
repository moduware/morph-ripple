# morph-ripple
General ripple animation element for Polymorph Components

## Getting Started:
For the information about how to clone the desired repository, running the local server and testing, please refer to this [link](https://github.com/moduware/polymorph-components/blob/master/INFO.md).

## Styling


Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--ripple-color`                 | Color of the ripple                    | #2196f3


## Demo
  - Here is a quick demo of the morph-ripple element.

  ![alt text](demo-images/basic-demo.png)


  ```html

  <template>
    <div class="ripple-wrapper">
      <morph-ripple></morph-ripple>
    </div>
  </template>

  ```


- Morph-ripple demo on other elements.



  ![alt text](demo-images/tabbar-demo.png)


  ```html

  <template>
    <h3>Android morph-tabbar demo</h3>
    <morph-tabbar platform="android" selected="play">
      <morph-tabbar-item platform="android" name="play" not-selected-image="../img/play_android.svg" selected-image="../img/play_android_selected.svg"></morph-tabbar-item>
      <morph-tabbar-item platform="android" name="favorite" not-selected-image="../img/favorite_android.svg" selected-image="../img/favorite_android_selected.svg"></morph-tabbar-item>
      <morph-tabbar-item platform="android" name="mic" not-selected-image="../img/mic_android.svg" selected-image="../img/mic_android_selected.svg"></morph-tabbar-item>
    </morph-tabbar>
  </template>

  ```





- The code below shows how we use it inside the elements.


  ![alt text](demo-images/button-demo.png)

  ```html
  <a href$="[[link]]" target$="[[target]]" rel$="[[relation]]">
    <slot></slot>
    <morph-ripple></morph-ripple>
  </a>
  ```
