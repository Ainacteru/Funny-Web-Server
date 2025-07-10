using System;
using System.Device.Gpio;
using System.Threading;
using System.Threading.Tasks;

public class Buzzer
{
    private readonly GpioController gpio;
    private readonly int pin;

    public Buzzer(int pin)
    {
        this.pin = pin;
        gpio = new GpioController();

        if (!gpio.IsPinOpen(pin))
        {
            gpio.OpenPin(pin, PinMode.Output);
            gpio.Write(pin, PinValue.Low);
        }
    }

    public void Start()
    {
        gpio.Write(pin, PinValue.High);
    }

    public void Stop()
    {
        gpio.Write(pin, PinValue.Low);
    }

}
