# Treeker - a fake JSX generator 🤖

Have you ever wanted to generate a _fake_ yet looking like real JSX tree for some testing purposes?

I faced the issue when I decided to work on a server-side renderer that works with React and understood that I need some fake components with either deep nesting or large number of children. Quick look-up on the internet yielded nothing so I decided to create a simple tool on my own.

## usage

First you will need to install it with either `yarn global add treeker` or `npm install -g treeker`. Now you can use it it like this:

`treeker --depth=3 --children=2 --root=App --node=Pane,Stuff,Container --leaf=Button,Paragraph`

```(jsx)
<App>
  <Pane>
    Pet partly clothing similar
    <Container>
      Build rough pipe enough
      <Paragraph>
        Dry ago
      </Paragraph>
    </Container>
  </Pane>
  <Container>
    Plant whenever young foot
    <Stuff>
      Twenty length whale mirror happened
      <Paragraph>
        Family here curve community public
      </Paragraph>
      <Button>
        Garden station
      </Button>
    </Stuff>
    <Container>
      Many process everybody gasoline result
      <Paragraph>
        Gave
      </Paragraph>
      <Button>
        Longer motion quietly boat sentence
      </Button>
    </Container>
  </Container>
</App>
```

Treeker will generate a fake JSX tree (string, actually) for you with:

- a root component you set with `--root` parameter
- nesting depth that is what you specified exactly with `--depth`
- one of a "node" components set with `--node`
- and leaf components set with `--leaf`
- where each of nodes has a number of children from 1 to `--children`

## License

MIT License

Copyright (c) 2018 Oleg Gromov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
