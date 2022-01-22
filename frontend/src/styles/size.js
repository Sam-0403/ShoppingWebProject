// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)

// Medium devices (tablets, 768px and up)

// Large devices (desktops, 992px and up)

// Extra large devices (large desktops, 1200px and up)

const size_list = {
    xxs: "400px",
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
    xl: "1400px"
};

function up(size){
    return `@media (min-width: ${size_list[size]})`
}

function down(size){
    return `@media (max-width: ${size_list[size]})`
}

const sizes = {up, down};

export default sizes;