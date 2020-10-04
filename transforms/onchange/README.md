# onchange


## Usage

```
npx powerselect-onchange onchange path/of/files/ or/some**/*glob.hbs

# or

yarn global add powerselect-onchange
powerselect-onchange onchange path/of/files/ or/some**/*glob.hbs
```

## Local Usage
```
node ./bin/cli.js onchange path/of/files/ or/some**/*glob.hbs
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [leave-others](#leave-others)
* [powerselect-with-create](#powerselect-with-create)
* [powerselect](#powerselect)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="leave-others">**leave-others**</a>

**Input** (<small>[leave-others.input.hbs](transforms/onchange/__testfixtures__/leave-others.input.hbs)</small>):
```hbs
<NotPowerSelect
  @searchEnabled={{false}}
  @placeholder='Select a thing'
  @options={{this.options}}
  @selected={{this.selected}}
  @onchange={{action 'doSomething'}} as |dropdown|
>
  {{dropdown}}
</NotPowerSelect>
```

**Output** (<small>[leave-others.output.hbs](transforms/onchange/__testfixtures__/leave-others.output.hbs)</small>):
```hbs
<NotPowerSelect
  @searchEnabled={{false}}
  @placeholder='Select a thing'
  @options={{this.options}}
  @selected={{this.selected}}
  @onchange={{action 'doSomething'}} as |dropdown|
>
  {{dropdown}}
</NotPowerSelect>
```
---
<a id="powerselect-with-create">**powerselect-with-create**</a>

**Input** (<small>[powerselect-with-create.input.hbs](transforms/onchange/__testfixtures__/powerselect-with-create.input.hbs)</small>):
```hbs
<div ...attributes>
  <PowerSelectWithCreate
    @options={{this.options}}
    @oncreate={{action this.oncreate}}
    @onchange={{action this.change}}
    @search={{perform someTask}}
    @renderInPlace={{true}}
    @disabled={{@disabled}}
    @triggerId='someId'
    @placeholder='Some Placeholder' as |dd|
  >
    <span data-test-dropdown-option={{dd.name}}>
      {{dd.name}}
    </span>
  </PowerSelectWithCreate>
</div>
```

**Output** (<small>[powerselect-with-create.output.hbs](transforms/onchange/__testfixtures__/powerselect-with-create.output.hbs)</small>):
```hbs
<div ...attributes>
  <PowerSelectWithCreate
    @options={{this.options}}
    @oncreate={{action this.oncreate}}
    @onChange={{action this.change}}
    @search={{perform someTask}}
    @renderInPlace={{true}}
    @disabled={{@disabled}}
    @triggerId='someId'
    @placeholder='Some Placeholder' as |dd|
  >
    <span data-test-dropdown-option={{dd.name}}>
      {{dd.name}}
    </span>
  </PowerSelectWithCreate>
</div>
```
---
<a id="powerselect">**powerselect**</a>

**Input** (<small>[powerselect.input.hbs](transforms/onchange/__testfixtures__/powerselect.input.hbs)</small>):
```hbs
<PowerSelect
  @searchEnabled={{false}}
  @placeholder='Select a thing'
  @options={{this.options}}
  @selected={{this.selected}}
  @onchange={{action 'doSomething'}} as |dropdown|
>
  {{dropdown}}
</PowerSelect>
```

**Output** (<small>[powerselect.output.hbs](transforms/onchange/__testfixtures__/powerselect.output.hbs)</small>):
```hbs
<PowerSelect
  @searchEnabled={{false}}
  @placeholder='Select a thing'
  @options={{this.options}}
  @selected={{this.selected}}
  @onChange={{action 'doSomething'}} as |dropdown|
>
  {{dropdown}}
</PowerSelect>
```
<!--FIXTURES_CONTENT_END-->