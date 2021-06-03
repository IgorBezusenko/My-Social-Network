import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Hello maaan" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Hello maaan");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Hello maaan" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> contains correct status", () => {
    const component = create(<ProfileStatus status="Hello maaan" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Hello maaan");
  });

  test("after creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status="Hello maaan" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test("<input> should be displayed instants of span", () => {
    const component = create(<ProfileStatus status="Hello maaan" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("Hello maaan");
  });

  test("collBack deActivatedEditMode should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="Hello maaan" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deActivatedEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
