import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

export function Menus() {
    return (
        <>
        <div className='sidebar'>
            <Sidebar>
                <div className='menu'>
                    <Menu>
                        <div className='gapbetween'></div>
                        <MenuItem href='/viewall' className='smykker'> Alle smykker</MenuItem>
                            <div className='shopby'>Shop udfra æstetik</div>
                        <MenuItem href='/girly' className='girly'> Girly </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/goth' className='goth'> Goth </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/cottagecore' className='cottagecore'> Cottagecore </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/kawaii' className='kawaii'> Kawaii </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/space' className='space'> Space </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/elegant' className='elegant'> Elegant </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/special' className='special'> Special </MenuItem>


                    
                        <div className='shopby'>Shop udfra smykke</div>
                        <MenuItem href='/necklace' className='smykker'> Halskæde  </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/choker' className='smykker'> Choker </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/earrings' className='smykker'> Øreringe </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/bracelet' className='smykker'> Armbånd </MenuItem>
                        <div className='gapbetween'></div>
                        <MenuItem href='/hairband' className='smykker'> Hårbånd </MenuItem>
                        <div className='gapbetween'></div>

                    </Menu>
                </div>
            </Sidebar>;
        </div>
        </>
    )
}