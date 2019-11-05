# Laravel Nova Link Field
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

#### Index View
![](github/index.png?raw=true)

#### Edit View
![](github/edit.png?raw=true)

## Installation

1. `composer require khalin/nova-link-field`

## Usage

1. Include the dependency `use Khalin\Nova\Field\Link;`
2. Add to the `Fields` array
```
Link::make('Charge Id', 'stripe_id'),
```

## Advanced usage

### Edit link href: 
For this needs you can use `url()` function (accept `Callable` or `string`)

Example:
``` 
Link::make('Charge Id', 'stripe_id')
                ->url(function () {
                    return "https://dashboard.stripe.com/payments/{$this->stripe_id}";
                })
```

### Set custom link text
For this needs you can use `text()` function (accept `Callable` or `text`)

Example: 
``` 
Link::make('Charge Id', 'stripe_id')
                ->url(function () {
                    return "https://dashboard.stripe.com/payments/{$this->stripe_id}";
                })
                ->text("Go To Stripe")
```

### Show icon instead of text
Replaces text with an icon on the index view. For this needs you can use `icon()` function

Example: 
``` 
Link::make('Charge Id', 'stripe_id')
                ->url(function () {
                    return "https://dashboard.stripe.com/payments/{$this->stripe_id}";
                })
                ->text("Go To Stripe")
                ->icon()
```

### Open link in blank window
For this needs you can use `blank()` function.

Example: 
``` 
Link::make('Charge Id', 'stripe_id')
                ->url(function () {
                    return "https://dashboard.stripe.com/payments/{$this->stripe_id}";
                })
                ->blank()
```

### Add additional classes to `<a>`
For this needs you can use `classes()` function (accept `Callable` or `text`). 

Example: 
```
Link::make('Charge Id', 'stripe_id')
                ->classes(function () {
                    return null === $this->charge_id ? 'charge__pending' : "charge_successfull";
                })
```


## TODO
- [ ] Cover field with tests
