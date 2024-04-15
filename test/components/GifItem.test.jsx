/**
 * @jest-environment jsdom
 */
import { GifItem } from '../../src/components/GifItem';
const { render, screen } = require("@testing-library/react");

describe('GiftItem test', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe hacer mach con el snapshot', () => { 
        const { container } = render( <GifItem title={ title } url={ url } />)
        expect( container ).toMatchSnapshot();
     });

     test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 
        
        render( <GifItem title={ title } url={ url }/>)
        
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
      });

      test('debe mostrar el titulo en el componente', () => { 
        
        render( <GifItem title={ title } url={ url }/>)
        expect( screen.getByText( title )).toBeTruthy();
       })
 })