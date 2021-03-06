module.exports = {
  status: "wip",
  collated: true,
  default: "Stack Colored Top Icon",
  context: {
    type: "stack",
    size: "2x",
    icons: [
      {
        icon: "circle",
        prefix: "fas",
        classes: "fa-stack-2x text-base-light"
      },
      {
        icon: "plus",
        prefix: "fas",
        classes: "fa-stack-1x text-secondary-dark"
      }
    ]
  },
  variants: [
    {
      name: "stack colored background",
      label: "Stack Colored Background",
      context: {
        icons: [
          {
            icon: "circle",
            prefix: "fas",
            classes: "fa-stack-2x text-base-light",
          },
          {
            icon: "arrow-down",
            prefix: "fas",
            classes: "fa-stack-1x",
          }
        ]
      }
    },
    {
      name: "stack overlap",
      label: "Stack Overlap",
      context: {
        icons: [
          {
            icon: "camera",
            prefix: "fas",
            classes: "fa-stack-1x"
          },
          {
            icon: "ban",
            prefix: "fas",
            classes: "fa-stack-2x text-error"
          }
        ]
      }
    },
    {
      name: "Two Layers",
      label: "Two Layers",
      context: {
        type: "layers",
        size: "4x",
        icons: [
          {
            icon: "circle",
            prefix: "fas",
            classes: "text-accent-cool-light",
          },
          {
            icon: "edit",
            prefix: "far",
            classes: "text-base",
            dataTransform: "shrink-3 down-2 right-5",
          }
        ]

      }
    },
    {
      name: "Three Layers",
      label: "Three Layers",
      context: {
        type: "layers",
        size: "4x",
        icons: [
          {
            icon: "circle",
            prefix: "fas",
            classes: "text-primary-light",
          },
          {
            icon: "circle",
            prefix: "far",
            classes: "text-primary",
          },
          {
            icon: "caret-down",
            prefix: "fas",
            classes: "text-secondary-dark",
            dataTransform: "shrink-4"
          }
        ]
      }
    }
  ],
  collator: function (markup, item) {
    return '<!-- Start: @' + item.handle + ' -->\n<div class="grid-col text-center"><span class="h4 display-block">' + item.label + '</span>' + markup + '</div>\n<!-- End: @' + item.handle + ' -->\n';
  },
};
