import React from "react";
import { shallow } from "enzyme";

import { LightTheme, DarkTheme } from "@nteract/presentational-components";

import { Themer } from "../../src/decorators/themer";

describe("Themer", () => {
  it("renders the correct theme when light", () => {
    const component = shallow(
      <Themer theme="light">
        <p>test</p>
      </Themer>
    );
    expect(component.find(LightTheme)).toHaveLength(1);
  });
  it("renders the correct theme when dark", () => {
    const component = shallow(
      <Themer theme="dark">
        <p>test</p>
      </Themer>
    );
    expect(component.find(DarkTheme)).toHaveLength(1);
  });
});
